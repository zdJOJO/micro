import fs from 'fs'
import react from '@vitejs/plugin-react'
import { defineConfig, ServerOptions } from 'vite'
import viteCompression from 'vite-plugin-compression' //压缩gzip
// import { getThemeVariables } from 'antd/dist/theme'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from 'less-vars-to-js'
import path from 'path'
import alias from '@rollup/plugin-alias'

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/theme.less'), 'utf8'))

// const env: 'dev' | 'test' = 'dev'

const server: ServerOptions = {
  port: 8004
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    viteCompression(),
    alias(),
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: name => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars: {
        //   ...getThemeVariables({
        //     dark: false
        //   }),
        //   'primary-color': '#009688'
        // }
        modifyVars: themeVariables
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      }
    ]
  },
  server: { ...server },
  build: {
    rollupOptions: {
      output: {}
    }
  }
})
