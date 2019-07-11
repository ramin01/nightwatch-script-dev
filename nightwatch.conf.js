var moment = require('moment');
var cucumberFile = `json:${process.env.SMOKETEST_BANNER}/reports/${process.env.SMOKETEST_BANNER}_cucumber_${moment().format('YYYY_MM_DD_hh_mm_ss')}.json`;

require('nightwatch-cucumber')({
    nightwatchClientAsParameter: true,
    cucumberArgs: [
      '--require', `${process.env.SMOKETEST_BANNER}/step_definitions`,
      '--format', 'node_modules/cucumber-pretty',
      '--format', cucumberFile,
      '--format-options', '{"colorsEnabled": true}',
      `${process.env.SMOKETEST_BANNER}/features`
    ]
  });

var seleniumServer = require('selenium-server')
const chromedriverPath = require('chromedriver').path;


module.exports = {
    // Loads nightwatch-cucumber configuration into main nightwatch.js conf
    output_folder: `./${process.env.SMOKETEST_BANNER}/reports`,
    globals_path : `${process.env.SMOKETEST_BANNER}/data/globals.js`,
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: `${process.env.SMOKETEST_BANNER}/page_objects`,
    live_output: false,
    disable_colors: false,


    // Sets configuration for Selenium Server
     selenium: {
         start_process: true,
         server_path: seleniumServer.path,
         start_session: true,
         host: '127.0.0.1',
         port: 4444,
         cli_args: {
             'webdriver.chrome.driver': chromedriverPath
          }
      },


    // Sets config options for different testing environments defined by the user
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            //selenium_host: "10.32.150.155",
            //selenium_port: 4444,
            silent: true,
            desiredCapabilities: {
                browserName: 'chrome',
                "goog:chromeOptions": {
                    args : ["--no-sandbox","--incognito", "--window-size=1366,768", "--ignore-ssl-errors=true", "start-maximized", "test-type", "disable-gpu"]
                    //args : ["--no-sandbox","--incognito", "--window-size=1366,768", "--ignore-ssl-errors=true", "start-maximized", "test-type", "disable-gpu"]
            },
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            'screenshots': {
                enabled: true,
                on_error: true,
                on_failure: true,
                path: `./${process.env.SMOKETEST_BANNER}/screenshots`
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}
