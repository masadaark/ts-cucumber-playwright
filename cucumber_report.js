const report = require("multiple-cucumber-html-reporter");
const path = require("path");
const jsonPath = path.join(__dirname, 'reports/cucumber-report');
report.generate({
    jsonDir: jsonPath,
    reportPath: path.join(__dirname, 'reports', 'cucumber-htmlreport'),
    displayDuration: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    saveCollectedJSON: true,
    displayReportTime: true,

    customData: {
        title: 'Run info',
        data: [{ reportedTime: new Date() }]
    }
})