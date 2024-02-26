//parse a json file,modify its content and save the changes.
const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    return;
  }

  // Modify the content (for example, add a new key-value pair)
  jsonData.newKey = 'newValue';

  // Convert the modified data back to JSON
  const modifiedJson = JSON.stringify(jsonData, null, 2);

  // Write the modified JSON back to the file
  fs.writeFile('data.json', modifiedJson, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing file:', writeErr);
      return;
    }
    console.log('File has been successfully modified and saved.');
  });
});
