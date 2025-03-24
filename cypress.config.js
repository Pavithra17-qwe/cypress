const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        parseXlsx({ filepath }) {
          return new Promise((resolve, reject) => {
            try {
              // Read the Excel file
              const workSheetsFromFile = xlsx.parse(fs.readFileSync(filepath));
              const firstSheetData = workSheetsFromFile[0].data;

              // Convert array data into JSON format
              const headers = firstSheetData[0]; // Assuming first row has headers
              const jsonData = firstSheetData.slice(1).map((row) => {
                return headers.reduce((acc, header, index) => {
                  acc[header] = row[index]; // Assign values based on headers
                  return acc;
                }, {});
              });

              resolve(jsonData); // Return structured JSON data
            } catch (err) {
              reject(err);
            }
          });
        },
      });
    },
  },
});