const path = require('path')

module.exports = (options, req) => ({
  postcss: [
    require('postcss-cssnext')()
  ],

  dist: 'dist/docs',

  filename: {
    images: 'assets/[name].[ext]'
  },

  webpack(config) {
    config.resolve = Object.assign({}, config.resolve, {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'docs': path.resolve(process.cwd(), './docs')
      },
      extensions: ['*', '.js', '.vue', '.json']
    })

    config.module.rules.push({
      test: /\.md$/,
      use: [
        { loader: 'raw-loader' }
      ]
    })

    return config // <-- Important, must return it
  }
})
