module.exports = {
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
      baseUrl: 'http://localhost:3000',
      supportFile: false,
      specPattern: 'cypress/e2e/integration/**/*.js',
      video: true,
      screenshotsFolder: 'cypress/screenshots',
      videosFolder: 'cypress/videos',
      reporter: 'junit',
      reporterOptions: {
        mochaFile: 'cypress/results/results-[hash].xml',
        toConsole: true,
      },
    },
  };
  