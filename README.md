# Lerna bootstrap for Gatsby

> Put All Your Eggs In One Basket.

This bootstrap ships with basic lerna configuration for multiple Gatsby websites.

## Quick start

1. **Create a main codebase via cloning this repository.**

   ```sh
   git clone https://github.com/edykim/lerna-gatsby-starter.git <YOUR_PROJECT> && cd <YOUR_PROJECT>
   # Then, update the package name in `package.json`
   ```

2. **Create a Gatsby site under `packages` directory.**

   This starter uses Lerna for maintaining multiple repositories. Create a Gatsby site using `gatsby` cli.

   ```sh
   # Create two sites for this example
   npx gatsby new packages/hogwarts
   npx gatsby new packages/hufflepuff
   # Then, update each of the package names in each `package.json`
   ```

3. **Update a path prefix for subsites.**

   Some of the packages will be placed under the main folder as a sub directory. Set the directory path as `PathPrefix` in `gatsby-config.js` file. See [Adding a Path Prefix](https://www.gatsbyjs.org/docs/path-prefix/).
   
   ```sh
   // /packages/hufflepuff/gatsby-config.js
   module.exports = {
      // Note: it must *not* have a trailing slash.
      pathPrefix: `/hufflepuff`,
      // ...
   }
   ```

4. **Update `build` for the path prefix.**

   ```js
   // /packages/hufflepuff/package.json
   {
     "scripts": {
       "build": "gatsby build --prefix-paths", 
       // ...
     }
     // ...
   }
   ```

5. **Build all packages from main directory.**

   ```sh
   cd <YOUR_PROJECT>
   npm run build
   # All public directories are collected under `public` directory.
   ```
