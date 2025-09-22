// cucumber.js (in project root)
module.exports = {
  default: {
    require: [
      'features/steps_definition/**/*.js',
      'features/support/hooks.js'
    ],
    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      resultsDir: 'allure-results'
    }
  }
};
