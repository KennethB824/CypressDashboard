const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "i7334m",
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://wikipedia.org",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
