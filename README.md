[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/One-Nexus/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.com/One-Nexus/Synergy.svg)](https://travis-ci.com/One-Nexus/Synergy)
[![npm version](https://badge.fury.io/js/%40onenexus%2Fsynergy.svg)](https://www.npmjs.com/package/@onenexus/synergy)
[![npm version](https://img.shields.io/npm/dm/@onenexus/synergy.svg)](https://www.npmjs.com/package/@onenexus/synergy)

<a href="https://github.com/One-Nexus/Synergy">
    <img height="56px" src="http://www.onenexus.io/synergy/github-logo.png" />
</a>

> Synergy is a framework for building modular, configurable and scalable UI components for React-DOM projects

###### Boilerplate Features

* Includes React, ReactDOM and the Synergy framework
* Includes [Autoprefixer](https://github.com/postcss/autoprefixer)
* Includes Babel transpilation
* Easy dev environment with webpack-dev-server and hot-reloading

> [View this boilerplate on CodeSandbox](https://codesandbox.io/s/synergy-demo-sass-ri8vt)

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

## Tips & Info

* In order to avoid having to import [Cell](https://github.com/One-Nexus/Cell) and your project's theme in to every module, this boilerplate uses [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) allowing you to provide them both to all modules through your project's [Webpack configuration](https://github.com/One-Nexus/Synergy-Boilerplate-Sass/blob/master/webpack.config.babel.js#L50). Cell and your project's theme are imported into [`index.scss`](https://github.com/One-Nexus/Synergy-Boilerplate-Sass/blob/master/src/index.scss) which is supplied to sass-resources-loader.

---

<a href="https://twitter.com/ESR360">
    <img src="http://edmundreed.com/assets/images/twitter.gif?v=1" width="250px" />
</a>
<a href="https://github.com/ESR360">
    <img src="http://edmundreed.com/assets/images/github.gif?v=1" width="250px" />
</a>