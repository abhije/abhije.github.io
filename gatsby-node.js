const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        templates: path.resolve(__dirname, 'src/templates'),
        src: path.resolve(__dirname, 'src'),
      },
    },
  })
}
