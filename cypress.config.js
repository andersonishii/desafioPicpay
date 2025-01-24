const {defineConfig} = require('cypress');
const path = require('path');


module.exports = defineConfig({
  e2e: {
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": false,
      "html": true,
      "json": true
    },
    baseUrl: "https://meus-emprestimos.picpay.com/",
    fileServerFolder: "./",
    specPattern: path.resolve('cypress', 'e2e', '*cy.js'),
    supportFile: './support.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
