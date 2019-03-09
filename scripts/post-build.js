const { copyPublic } = require('./copy-public')
const { copyStatic } = require('./copy-static')
const { collectRedirects } = require('./collect-redirects')

const cwd = process.cwd()

/**
 * Copy all `public` directory under packages to root `public` directory.
 */
copyPublic(cwd)

/**
 * Copy all files from `static` directory to `public` directory.
 */
// copyStatic(cwd)

/**
 * Collect all `_redirects` files, merge it as one files, and put in the `public` directory.
 */
// collectRedirects(cwd)
