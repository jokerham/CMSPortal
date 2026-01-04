@echo off
REM ================================
REM Frontend folder structure
REM ================================

mkdir frontend
cd frontend

mkdir src

REM ================================
REM components
REM ================================
mkdir src\components
mkdir src\components\ui
mkdir src\components\layout
mkdir src\components\layout\templates
mkdir src\components\layout\regions
mkdir src\components\layout\widgets
mkdir src\components\navigation
mkdir src\components\forms
mkdir src\components\auth

REM ================================
REM modules
REM ================================
mkdir src\modules

mkdir src\modules\article
mkdir src\modules\article\components
mkdir src\modules\article\admin

mkdir src\modules\board
mkdir src\modules\board\components
mkdir src\modules\board\admin

mkdir src\modules\calendar
mkdir src\modules\calendar\components
mkdir src\modules\calendar\admin

mkdir src\modules\link
mkdir src\modules\link\components

mkdir src\modules\menu
mkdir src\modules\menu\admin

mkdir src\modules\layout
mkdir src\modules\layout\admin

mkdir src\modules\user
mkdir src\modules\user\admin

mkdir src\modules\role
mkdir src\modules\role\admin

REM ================================
REM pages / routes
REM ================================
mkdir src\pages
mkdir src\routes

REM ================================
REM hooks / utils / types
REM ================================
mkdir src\hooks
mkdir src\utils
mkdir src\types

REM ================================
REM graphql / state / registry
REM ================================
mkdir src\graphql
mkdir src\state
mkdir src\registry

REM ================================
REM config / assets
REM ================================
mkdir src\config
mkdir src\assets
mkdir src\assets\images
mkdir src\assets\icons

REM ================================
REM public / amplify
REM ================================
cd ..
mkdir public
mkdir amplify

echo.
echo ✅ Project folder structure created successfully
pause
