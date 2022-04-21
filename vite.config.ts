import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// 为 Element Plus 按需引入样式
// https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%89%8B%E5%8A%A8%E5%AF%BC%E5%85%A5
import ElementPlus from 'unplugin-element-plus/vite'

import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    WindiCSS(),
    eslintPlugin({
      cache: false,
      fix: false,
      include: 'src/**/*.+(js|jsx|ts|tsx|vue)',
      formatter: 'codeframe'
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
      },
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
  build: {
    outDir: 'output',
    manifest: true,
    brotliSize: false
  },
  server: {
    https: true,
    open: true
  }
})
