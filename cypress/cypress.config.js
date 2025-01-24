const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.qaoncloud.com', // Base URL of QAonCloud website
  },
});



// Export the Cypress configuration
module.exports = defineConfig({
  e2e: {
    // This is where we register our custom task to handle file downloads
    setupNodeEvents(on, config) {
      // Register the downloadFile task to enable the 'cy.downloadFile()' command
      downloadFile(on, config);

      // Always return the config object at the end
      return config;
    },
  },
});




