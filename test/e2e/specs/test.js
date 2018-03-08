// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'basic e2e tests': function (browser) {
      // automatically uses dev Server port from /config.index.js
      // default: http://localhost:8080
      // see nightwatch.conf.js
      const devServer = browser.globals.devServerURL
  
      browser
        .url(devServer)
        .waitForElementVisible('#app', 5000)
        .click('a[href="#/tasks"]')        
        .pause(5000)
        .assert.elementPresent('ul.list-group')
        .click('a[href="#/register"]')
        .pause(5000)
        .end()
    }
  }