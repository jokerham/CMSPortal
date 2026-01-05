import { useMemo, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  ListItemIcon,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  MdAccountCircle as AccountCircleIcon,
  MdLogout as LogoutIcon,
  MdSettings as SettingsIcon,
  MdDashboard as DashboardIcon,
  MdLogin as LoginIcon,
  MdPersonAdd as PersonAddIcon,
} from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';

type HeaderProps = {
  /**
   * Optional: show a compact app title on the left.
   * You can replace with a logo later.
   */
  title?: string;

  /**
   * Optional: enable Admin/User mode toggle.
   * Only shown if user isAdmin === true.
   */
  enableModeSwitch?: boolean;

  /**
   * If true, show a container max width (recommended for your layout system).
   */
  useContainer?: boolean;
};

export default function Header({
  title = 'Nanitlink',
  enableModeSwitch = true,
  useContainer = true,
}: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, user, isAdmin, logout } = useAuth();

  // Determine "mode" from current path
  const isAdminPath = useMemo(() => location.pathname.startsWith('/admin'), [location.pathname]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const displayName = user?.username ?? 'User';

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleGo = (path: string) => {
    handleCloseMenu();
    navigate(path);
  };

  const handleLogout = async () => {
    handleCloseMenu();
    await logout();
    navigate('/login', { replace: true });
  };

  const handleModeToggle = () => {
    // If currently in admin path, go to user home; else go to admin dashboard
    navigate(isAdminPath ? '/' : '/admin', { replace: true });
  };

  const Content = (
    <Toolbar disableGutters sx={{ minHeight: 64 }}>
      {/* Left: Title / Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            cursor: 'pointer',
            userSelect: 'none',
          }}
          onClick={() => navigate(isAdminPath ? '/admin' : '/')}
        >
          {title}
        </Typography>
      </Box>

      {/* Center: (optional) place for future MainNav / breadcrumbs */}
      <Box sx={{ flex: 1 }} />

      {/* Right: Admin/User switch (admin only) */}
      {enableModeSwitch && isAuthenticated && isAdmin && (
        <FormControlLabel
          sx={{ mr: 1, userSelect: 'none' }}
          control={
            <Switch
              checked={isAdminPath}
              onChange={handleModeToggle}
              inputProps={{ 'aria-label': 'Admin mode switch' }}
            />
          }
          label={isAdminPath ? 'Admin' : 'User'}
        />
      )}

      {/* Right: Auth buttons or User menu */}
      {!isAuthenticated ? (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            onClick={() =>
              navigate(`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`)
            }
          >
            Login
          </Button>
          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            onClick={() => navigate('/signup')}
          >
            Sign up
          </Button>
        </Box>
      ) : (
        <>
          <Tooltip title={displayName}>
            <IconButton onClick={handleOpenMenu} size="small" sx={{ ml: 1 }}>
              <Avatar sx={{ width: 34, height: 34 }}>
                {displayName?.[0]?.toUpperCase?.() ?? 'U'}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              sx: { mt: 1, minWidth: 220 },
            }}
          >
            <MenuItem disabled>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  {displayName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {isAdminPath ? 'Admin view' : 'User view'}
                </Typography>
              </Box>
            </MenuItem>

            <Divider />

            <MenuItem onClick={() => handleGo('/profile')}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>

            {isAdmin && (
              <MenuItem onClick={() => handleGo('/admin')}>
                <ListItemIcon>
                  <DashboardIcon fontSize="small" />
                </ListItemIcon>
                Admin dashboard
              </MenuItem>
            )}

            <Divider />

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </Toolbar>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      {useContainer ? <Container maxWidth="lg">{Content}</Container> : Content}
    </AppBar>
  );
}