# Getting Started

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Install

The Installation is very simple, but first you need to install [Node.js](https://nodejs.org/en/).

After, just execute command in your terminal:

```
npm install -g cordova mockapp
```

## Create new app

```
mockapp new MyFirstApp
```
or
```
mockapp new "My First App"
```

Options:
- `--id "br.com.fistapp"`: Set id app.
- `--name "My Fist App "`: Set name app.
- `--path directory_app`: Set directory app.

example:
```
mockapp new MyFirstApp --id "com.br.firstapp" --name "My First App --path directory_app"
```

## Preview app

```
mockapp preview
```

Options:
- `--nobrowser`: No open default browser after run preview.

## Build app

```
mockapp build android
```

## Run device or emulate

```
mockapp run android
```
