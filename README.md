# mocha_test
mocha test develop

## Description
Mocha test using ES6

## Install

First enable system config:

```bash
npm init
```

Install mocha framework:

```bash
npm install mocha --save
```

Install babel compiler from ES6 to ES5:

```bash
npm install babel-cli babel-core --save-dev

npm install babel-preset-es2015 --save-dev
```

## Configuration

Config package.json
```json
  "scripts": {
    "test": "mocha $(find app -name '*_test.js')",
    "babel": "babel --presets es2015 app.js -o app/build/main.bundle.js"
  }
```



