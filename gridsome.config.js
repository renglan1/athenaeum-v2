// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Athenaeum',
  siteDescription: 'Athenaeum is a heavily styled wiki for some of Aetha\'s favorite video game characters.',
  icon: './src/favicon.png',
  plugins: [
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images'),
    config.resolve.alias.set('@videos', '@/assets/videos')
  }
}
