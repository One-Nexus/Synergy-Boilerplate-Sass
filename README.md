[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

<img height="56px" src="http://www.onenexus.io/synergy/github-logo.png" />

> Synergy is a framework for building modular, configurable and scalable UI components for React-DOM projects

###### Features

* Make cosmetic UI updates to your app without modifying source code ([learn more](https://github.com/One-Nexus/Synergy/wiki/Module-Configuration#apply-cosmetic-css-via-configuration))
* Easily configure modules and create themes for your app ([learn more](https://github.com/One-Nexus/Synergy/wiki/Themes))
* Add UI interactions without requiring class components, hooks or state ([learn more](https://github.com/One-Nexus/Synergy/wiki/Interactions))
* Everything you need to create component libraries/UI styleguides

## Setup

1. Clone the repository and then navigate into the cloned directory

```bash
git clone https://github.com/One-Nexus/Synergy-Boilerplate-Sass.git && cd Synergy-Boilerplate-Sass
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

4. ...happy coding!

Access the devlopment server in the browser (default port is 8080, so visit http://localhost:8080). Start looking through the sample module and theme code - make some changes and see them reflected in your browser instantly!

To bundle your application, run `npm run build`. The application bundle will be created at `./dist/app.js`.

## Build/Compile

> Generate a bundle to `dist/app.js`

```bash
npm run build
```

## Tips & Info

* In order to avoid having to import Cell and your project's theme in to every module, this boilerplate uses [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) allowing you to provide them both to all modules through your project's [Webpack configuration](#TODO). Cell and your project's theme are imported into [`index.scss`](#TODO) which is supplied to sass-resources-loader.