# Scrivito Social Links
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A social links React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-social-links/master/social-links-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```
$ npm install scrivito-social-links
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```
import "scrivito-social-links";
```

Also add the styling of the widget to your app. This can be done by either loading it via `css-loader` (e.g. in `index.js` or `Widgets/index.js`):

```
import "scrivito-social-links/index.css";
```

Or by including the styling to your style sheets (e.g. in `index.scss`):

```scss
@import "~scrivito-social-links/index.css";
```

## Features
The Social Links Widget renders links and icons for Facebook, Twitter and Linkein. No external library.

## Widget Configuration
In the widget configuration form you can save the text and a slug, which will be used for the social post to the social networks.

## Development

With `npm run build` you can build the package into `build/`.

With `npm start` you'll start a continues process, that rebuilds `build/` automatically once the source code is changed.

To add this library locally do the following in your scrivito app:

```
npm install file:<path to build folder>
```

e.g.

```
npm install file:../scrivito-social-links/build/
```

To publish the package:

```
npm i && npm run build && cd build/ && npm publish
```

## Check code quality

With `npm run eslint` and `npm run es-check` you can check your coding quality.



