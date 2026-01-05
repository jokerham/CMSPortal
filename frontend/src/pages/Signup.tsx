import { useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  confirmSignUp,
  resendSignUpCode,
  signIn,
  signUp,
} from 'aws-amplify/auth';
import { useAuth } from '@/hooks/useAuth';

type Step = 'signup' | 'confirm';

export default function Signup() {
  const navigate = useNavigate();
  const { refreshSession } = useAuth();

  const [step, setStep] = useState<Step>('signup');

  const [username, setUsername] = useState(''); // could be email or custom username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmCode, setConfirmCode] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const isEmailUsername = useMemo(() => {
    // If you use email as username, you can simplify and just set username=email
    return username.includes('@');
  }, [username]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfo(null);

    try {
      const finalUsername = username.trim();
      const finalEmail = (email || (isEmailUsername ? finalUsername : '')).trim();

      const res = await signUp({
        username: finalUsername,
        password,
        options: {
          userAttributes: {
            email: finalEmail || undefined,
          },
          // If you want email verification: Amplify/Cognito controls delivery
          // autoSignIn: true, // optional; depends on your pool settings
        },
      });

      // If confirmation is required, go to confirm step
      if (res.nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        setStep('confirm');
        setInfo('A confirmation code was sent. Please enter it to verify your account.');
      } else {
        // Rare case: user is already confirmed
        setInfo('Account created. You can sign in now.');
        navigate('/login', { replace: true });
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfo(null);

    try {
      const finalUsername = username.trim();

      const res = await confirmSignUp({
        username: finalUsername,
        confirmationCode: confirmCode.trim(),
      });

      if (res.isSignUpComplete) {
        // Optional: auto sign-in after confirmation
        await signIn({ username: finalUsername, password });
        await refreshSession();

        navigate('/', { replace: true });
      } else {
        setInfo('Confirmation completed. Please sign in.');
        navigate('/login', { replace: true });
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Confirmation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    setError(null);
    setInfo(null);

    try {
      await resendSignUpCode({ username: username.trim() });
      setInfo('A new confirmation code has been sent.');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to resend code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {step === 'signup' ? 'Create account' : 'Confirm your account'}
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            {step === 'signup'
              ? 'Sign up to start using the portal.'
              : 'Enter the verification code sent to your email/SMS.'}
          </Typography>

          <Stack spacing={2} sx={{ mb: 2 }}>
            {error && <Alert severity="error">{error}</Alert>}
            {info && <Alert severity="info">{info}</Alert>}
          </Stack>

          {step === 'signup' ? (
            <Box component="form" onSubmit={handleSignUp}>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
              />

              <TextField
                label="Email (optional if username is email)"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                disabled={loading}
              >
                {loading ? 'Creating…' : 'Sign up'}
              </Button>

              <Button
                variant="text"
                fullWidth
                sx={{ mt: 1 }}
                onClick={() => navigate('/login')}
              >
                Already have an account? Sign in
              </Button>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleConfirm}>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                helperText="Use the same username you signed up with"
              />

              <TextField
                label="Confirmation code"
                fullWidth
                margin="normal"
                value={confirmCode}
                onChange={(e) => setConfirmCode(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                disabled={loading}
              >
                {loading ? 'Confirming…' : 'Confirm'}
              </Button>

              <Button
                type="button"
                variant="outlined"
                fullWidth
                sx={{ mt: 1 }}
                onClick={handleResend}
                disabled={loading || !username.trim()}
              >
                Resend code
              </Button>

              <Button
                variant="text"
                fullWidth
                sx={{ mt: 1 }}
                onClick={() => {
                  setStep('signup');
                  setError(null);
                  setInfo(null);
                }}
              >
                Back to sign up
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
}