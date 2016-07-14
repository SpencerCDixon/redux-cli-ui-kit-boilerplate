## Installation
```sh
npm i https://github.com/smartscheduling/athena-ui.git -S
```

## Development
For making new components you can use the webpack-dev server with hot-loading.
`npm start` will spin up the server then `open http://localhost:3001` in your
terminal.  It uses port `3001` in order to not conflict with other processes
running on `3000`.

The UI kit uses a code generation tool called [redux-cli](https://github.com/SpencerCDixon/redux-cli) to enhance the
development experience.  Whenever you're ready to make a new UI component just
run the following:
```sh
redux g comp ComponentNameHere
```
Make sure you have `redux-cli` installed globally in order for the generator to
work.  Install with: `npm i redux-cli g`.

The generator will create these files for you:
```sh
redux g comp CardContent

1 src/components/CardContent
2 ├── CardContent.example.js
3 ├── CardContent.js
4 ├── CardContent.less
5 ├── CardContent.test.js
6 └── index.js
```

After your code is generated there is an afterInstall hook that will add the
export automatically to `src/index.js`.  Like this:
```
# src/index.js
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Header } from './components/Header';
export { Table } from './components/Table';
export { Text } from './components/Text';
export { CardContent } from './components/CardContent'; <--- New export automatically
```

**Other Generators**:

```sh
redux g devcomp ComponentName          # make a component in documentation site
redux g example Basic --comp=Button    # make a blank example for the Button component
```

## Doc Generation
Docs get automatically generated using react-docgen and then placed into the
component folder.  The ComponentDocumentation won't be compiled in the build
bundle but can be used in the documentation site.  It's a nice table with the
props and description of the component.

```sh
npm run docs
```

## npm Scripts
The npm scripts in `package.json` take advantage of a module called
better-npm-run which allows us to set environment variables specific to each
script being run.

|Script|Description|
|---|---|
|`npm start`|spin up webpack dev server to start building new components|
|`npm run clean`|rm -rf's the /dist folder in preparation for a new build|
|`npm run build`|builds the javascript and less for distribution|
|`npm run babel`|just runs the components through babel transpiler (rarely used alone)|
|`npm run lint`|lint all the UI components|
|`npm run docs`|auto-generates documentation on how to use the different react components|
|`redux g comp <ComponentName>`|generate new component with all required files pre-populated|
|`redux g devcomp <ComponentName>`|generate new component to be used in the doc site|
|`redux g example <ExampleName> --comp=<ComponentName>`|blank example for component|

## CSS Modules
In order to avoid css collisions, athena-ui takes advantage of [css
modules](https://github.com/css-modules).  

### Using with webpack-based project
Install relevant LESS and Font loaders:
```sh
npm i less less-loader url-loader file-loader -D
```

Set up a loader to process the less files and the fonts:
```javascript
// whatever config you have for your CSS MODULES
var CSS_MODULES = '&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]';

// Athena UI Loaders
{ test: /node_modules[\\\/]athena-ui[\\\/].*\.less/,
  loader: 'style!css?modules' + CSS_MODULES + '!postcss!less?sourceMap' },

// Font Loaders
{ test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
{ test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
{ test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
{ test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
{ test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
{ test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
```

### Using with react-redux starter kit:
```sh
npm i redux-cli -g
redux new <new app name>
cd <new app name>
```
Follow along with redux-starter kit instructions below:

Inside Core Layout include the global css
```javascript
import 'athena-ui/dist/styles/globals.less';
import '../../styles/core.scss'
```

In webpack config add the required less loaders to compile the CSS `npm i less
less-loader -D`.  Also add
`athena-ui` to the array of paths that we want to use CSS Modules.
```javascript
# webpack.config.js

webpackConfig.module.loaders.push({
  test: /\.less/,
  include: cssModulesRegex,
  loaders: [
    'style',
    cssModulesLoader,
    'postcss',
    'less?sourceMap'
  ]
})

const PATHS_TO_TREAT_AS_CSS_MODULES = [
  'athena-ui' <-- Use CSS Modules for athena UI
]
```
Finally, add `athena-ui` to the vendor webpack entry point:
```javascript
# config/_base
compiler_vendor : [
  'history',
  'react',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'athena-ui'  <--- Added athena-ui
],
```
It shouldn't be required to do this but if you want to include `.less` and
`.scss` file resolvers to the webpack config it might avoid potential issues if
someone ever does an @import with those extensions:
```javascript
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.client(),
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.less'] <--- Added extensions here
  },
  module: {}
}
```

Add athena-ui to the webpack resolution path so we don't need to use relative
paths.
```javascript
# config/_base.js
  dir_server : 'server',
  dir_test   : 'tests',
  dir_athena : 'node_modules/athena-ui/dist', <--- Add this

config.utils_paths = {
  base   : base,
  client : base.bind(null, config.dir_client),
  dist   : base.bind(null, config.dir_dist),
  athena : base.bind(null, config.dir_athena) <--- And this
}
```

Inside the webpack config we can add our athena path:
```javascript
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: [
      paths.client(),
      paths.athena(),  <--- Added this guy
    ],
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.less']
  },
  module: {}
}
```


## TODO:
- [x] set up karma test runner with all the goodies  
- [ ] make Component.example.js show up in gatsby docs  
- [ ] reskin docs to look athena-like 
- [ ] automatically deploy via github pages npm package  
- [ ] how to use variables in css modules (might not need this, just use less variables)  
- [ ] Figure out how to import less files from root instead of relative paths  
- [x] get redux-cli set up with a blueprint for new components for faster building  
- [ ] bundle bootstrap in with the UI kit  
- [ ] bundle athena icons in with the UI kit  
- [x] set up linting based on the airbnb configuration  
- [ ] set up [react collapse](https://github.com/nkbt/react-collapse) for
    smoother animations

## Notes
`/home/sdixon/p4/prod/htdocs/static/shared/styles/purpleview/canonicals` - css
for basic elements

* [this could be a useful library for dealing with more advanced prop validation](https://github.com/react-bootstrap/react-prop-types)
* in afterInstall hook I should append the new component into the documentation site
