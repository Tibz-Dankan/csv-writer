// Import necessary modules
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");

// Define the CSV file path and headers
const csvFilePath = "example.csv";
const csvWriter = createCsvWriter({
  path: csvFilePath,
  header: [
    { id: "name", title: "Name" },
    { id: "age", title: "Age" },
    { id: "city", title: "City" },
  ],
});

// Sample data to write to the CSV file
const data = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "Los Angeles" },
  { name: "Bob Johnson", age: 40, city: "Chicago" },
];

// Write data to the CSV file
csvWriter
  .writeRecords(data)
  .then(() => {
    console.log("CSV file created and data written successfully");
  })
  .catch((err) => {
    console.error("Error writing to CSV file:", err);
  });
