# Scrivito Social Links
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A social links React component/Scrivito widget for the Scrivito CMS.

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
In the widget configuration form you can save the text and a slug, which will be used for the social post to the social networks. Works with Facebook, Twitter and Linkedin

## Widget properties

In the widget properties you can set:
- Text
- Slug