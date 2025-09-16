module.exports = {
  default: {
    require: ["features/steps_definition/*.js", "features/support/*.js"],
    format: [
      "progress",
      "allure-cucumberjs/reporter"
    ],
    paths: [
      "features/**/*.feature"
    ],
    format: ["progress"],
    formatOptions: {
      "allure-cucumberjs/reporter": {
        resultsDir: "allure-results"
      }
    },
    publishQuiet: true
  }
};
