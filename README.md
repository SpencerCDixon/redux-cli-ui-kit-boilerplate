## Getting Started

```
npm install
npm start
open http://localhost:3001
```

**Note** - this was hacked together pretty quickly and probably needs a lot of
work.

## Building New Components

```
redux g component NewComponent
```
Then go and create your component.

Next generate documentation for your newly created component with:
```
npm run docs
```

Once docs are generated we want to display them on the dev site.  Run:
```
redux g container NewComponent
```
That command will create a new link in the sidebar and a new page in your UI
kit.


## Building For Production
Building your components will run them through the linter, run all tests,
compile from ES6 to ES5, and copy over all assets (images, fonts) into the
`dist` folder.

```
npm run build
```

## npm Scripts
The npm scripts in `package.json` take advantage of a module called
better-npm-run which allows us to set environment variables specific to each
script being run.

|Script|Description|
|---|---|
|`npm start`|spin up webpack dev server to start building new components|
|`npm run clean`|rm -rf's the /dist folder in preparation for a new build|
|`npm run build`|builds the javascript, images, and fonts for distribution|
|`npm run babel`|just runs the components through babel transpiler (rarely used alone)|
|`npm run lint`|lint all the UI components|
|`npm run docs`|auto-generates documentation on how to use the different react components|
|`redux g component <ComponentName>`|generate new component with all required files pre-populated|
|`redux g container <ComponentName>`|generate container to hold component examples/documentation.|
|`redux g doc-comp <ComponentName>`|generate new component to be used in the doc site|
|`redux g example <ExampleName> --comp=<ComponentName>`|blank example for component|
