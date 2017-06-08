# react-ecosystem

## Overview
This is a basic setup for a React app with the tools needed to get a development environment up and running.

## Technologies

- React
- Webpack
- Babel
- webpack-dev-server
- React Hot Loader 3
- Jest
- Enzyme
- ESLint
- Express
- TravisCI

## Directory Structure
```
.
├── /dist/                          # Folder destination for building bundles for production
├── /src/                           # Source files to be bundled by webpack
│    ├── /components/               # React views component package
│    └── index.js                   # App entry point
├── /tools/                         # Tooling folder containing scripts and config for development, building and deployment
│    ├── webpack.client.babel.js    # Webpack configuration file for bundling server-side code
│    ├── webpack.common.js          # Base Webpack configuration file
│    ├── webpack.dev.babel.js       # Webpack configuration file for adding development properties to client-side config
│    └── webpack.server.babel.js    # Webpack configuration file for bundling client-side code
├── .babelrc                        # Babel configuration file to define presets and plugins
├── .eslintrc                       # ESLint configuration file to specify linting rules
├── index-template.html             # HTML template used for HtmlWebpackPlugin
```

## Development

1. Clone repo to your machine and navigate to project
2. Run `npm install` to install npm modules
3. Run `npm run dev` to start the Webpack development server

## Production

1. Run `npm run build` to transpile client-side and server-side code
2. Run `npm start` to start up Express web server to serve React app
3. Navigate browser URL to `http://localhost:3000` to run React app
