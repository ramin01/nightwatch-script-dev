const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: process.argv[2] + '/reports/',
    reportPath: process.argv[2] + '/reports/',
    metadata:{
        browser: {
            name: 'chrome',
            version: '75.0'
        },
        device: '',
        platform: {
            name: 'Linux',
            version: '7.6'
        }
    },
    customData: {
        title: 'Nightwatch Automation',
        data: [
            {label: 'Project', value: 'Nightwatch CICD'},
            {label: 'Release', value: '2.0'},
        ]
    }
});