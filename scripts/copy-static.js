const fs = require('fs-extra')
const path = require('path')

/**
 * Copy static files to public directory.
 */
exports.copyStatic = (
  currentWorkingDirectory = process.cwd(),
  staticDirectoryName = 'static',
  publicDirectoryName = 'public',
  overwrite = false
) => {
  const staticDir = path.join(currentWorkingDirectory, staticDirectoryName)

  if (fs.existsSync(staticDir)) {
    try {
      fs.copySync(
        staticDir,
        path.join(currentWorkingDirectory, publicDirectoryName),
        {
          overwrite,
        }
      )
      console.log(`Files copied to public from static.`)
    } catch (err) {
      console.error(err)
    }
  }
}
