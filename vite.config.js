import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  build: {
    // 去除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  base: './', // 设置打包路径
  server: {
    host: '0.0.0.0',
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    https: false,
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://xxx.xxx.xxx.xxx:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
})
