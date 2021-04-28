const cucumber = require('cypress-cucumber-preprocessor').default
const cypress = require('cypress')
const marge = require('mochawesome-report-generator')
const { merge } = require('mochawesome-merge')

cypress.run().then(
    () => {
        generateReport()
    },
    error => {
        generateReport()
        console.error(error)
        process.exit(1)
    }
)

function generateReport(options) {
    return merge(options).then(report => marge.create(report, options))
}


module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
    require('cypress-mochawesome-reporter/plugin')(on);
}