![Logo](https://raw.githubusercontent.com/fabiorogeriosj/mockapp/design/logo_dark.png)

Create functional prototypes for mobile applications

  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

See [documentation here](https://mockappframework.github.io/).

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

## Install service

```
mockapp install service camera
```

```
mockapp install service pushNotification
```

```
mockapp install service login-facebook
```

## Tools

Add new page

```
mockapp add page User
```

Add controller

```
mockapp add controller MyController
```

Add service

```
mockapp add service apiService
```

Config app

```
mockapp config
```

```
mockapp config update
```

View docs

```
mockapp docs
```

View issues

```
mockapp bugs
```


Remove app

```
mockapp delete MyFirstApp
```

[downloads-image]: https://img.shields.io/npm/dm/mockapp.svg
[npm-url]: https://www.npmjs.com/package/mockapp
[npm-image]: https://img.shields.io/npm/v/mockapp.svg
[travis-image]: https://img.shields.io/travis/fabiorogeriosj/mockapp/master.svg?label=linux
[travis-url]: https://travis-ci.org/fabiorogeriosj/mockapp
[appveyor-image]: https://img.shields.io/appveyor/ci/fabiorogeriosj/mockapp/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/fabiorogeriosj/mockapp
