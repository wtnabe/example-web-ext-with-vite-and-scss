import path from 'path'

import { defineConfig } from 'vite'
import webExtension from 'vite-plugin-web-extension'

export default defineConfig(({ command, mode }) => {
  return {
    root: 'src',
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
      sourcemap: (mode === 'development') ? 'inline' : false
    },
    plugins: [
      webExtension({
        manifest: () => {
          const packageJson = require('./package.json')
          return {
            ...require('./src/manifest.json'),
            name: packageJson.name,
            version: packageJson.version
          }
        },
        assets: 'assets'
      })
    ]
  }
})
