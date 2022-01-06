const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

module.exports = {
  devServer: {
    port: 8082
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: config => {
    const plugins = []
    if (process.env.NODE_ENV === 'production') {

    } else {

    }
    plugins.push(AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }))
    return { plugins }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('types', resolve('./types'))
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      }).end().use('svgo-loader').loader('svgo-loader')
      .tap(options => ({
        ...options,
        plugins: [{
          name: 'removeAttrs',
          params: {
            attrs: '(fill|stroke)'
          }
        }]
      })).end()
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/style/variables.scss";'
      }
    }
  }
}
