// read the json file asynchrously
const fs = require('fs');
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  let jsonData;
  try {
    jsonData = JSON.parse(data);
    console.log('File content:', jsonData);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});
