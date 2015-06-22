module.exports = {
  ui: 'tape',
  concurrency: 5,
  browsers: [{
    name: 'chrome',
    version: 'latest',
    platform: 'Windows 2012 R2'
  }, {
    name: 'firefox',
    version: 'latest',
    platform: 'Windows 2012 R2'
  }, {
    name: 'ie',
    version: 'latest'
  }, {
    name: 'safari',
    version: 'latest'
  }, {
    name: 'iphone',
    version: 'latest'
  }, {
    name: 'android',
    version: 'latest'
  }, {
    name: 'ipad',
    version: 'latest'
  }],
  tunnel: 'ngrok'
};
