# Bits

Handy documentation app for digital products. Check [docs](./docs) folder for advanced features.

## Quick Start

Install `bits` globally via npm

``` bash
npm install -g bits
```

Then use cli

``` bash
# will create docs folder if not exists with dummy README.me file
bits init

# serve docs folder with hot reload at localhost:8080
bits dev

# build static docs site
bits build
```

### Local installation

``` bash
# install bits locally
npm install --save bits
```

then add npm scripts into your package.json

``` json
{
  "scripts": {
    "docs:init": "bits init",
    "docs:dev": "bits dev",
    "docs:build": "bits build"
  }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
../bin/bits

# build for production release
npm run build
```

## TODO

- [ ] Easy gh-pages integration
- [ ] Unit tests
- [ ] Example running vue, js and css
- [ ] User config
- [ ] Move Example to optionated addons (reduce final file size)
- [ ] Templates (eg: https://github.com/material-components/material-components-web/blob/master/docs/code/readme_template.md)

## Known Issues

Hot reload sometimes? stops reloading, dropping poi and using webpack directly can fix.

---

Built with `poi` and `vue`. 
