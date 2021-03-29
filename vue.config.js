module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    },
    // publicPath: '/',
    // disableHostCheck: true,
    devServer: {  
        proxy: {
          '/api': {
            target: 'http://111.231.134.126:8083/bjJK',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
    },
}
