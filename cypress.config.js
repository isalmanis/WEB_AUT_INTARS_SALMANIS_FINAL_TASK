const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      siteBaseUrl: "https://demoqa.com/",
      pathToTestFiles: "./cypress/files/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
