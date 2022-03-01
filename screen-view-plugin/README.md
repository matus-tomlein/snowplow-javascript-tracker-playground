# Screen View Plugin

This plugin adds mobile screen view tracking to apps with Snowplow Browser Tracker.

## Maintainer quick start

Requires [Node](https://nodejs.org/en/) (10+).

### Setup repository

```bash
$ npm install
$ npm test
$ npm run build
```

## Package Publishing

```bash
npm run build
npm login
npm publish
```

## Example Usage from npm

Initialize your tracker with the SimpleContextTemplate:

```js
import { newTracker } from '@snowplow/browser-tracker';
import { ScreenViewPlugin, trackScreenView } from 'screen-view-plugin';

// initialize tracker with the plugin
newTracker('sp1', '{{collector}}', { plugins: [ ScreenViewPlugin() ] });

// track a screen view event
trackScreenView({ name: 'Screen 1' });
```

## Example Usage with tag based tracker

Assuming `sp.js` or `sp.lite.js` has been loaded on `window.snowplow`, and this plugin is published on npm:

```js
window.snowplow('addPlugin', 
  "path/to/dist/index.umd.min.js",
  ["snowplowSimpleTemplate", "SimpleContextPlugin"]
);
```
