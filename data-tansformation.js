const fs = require("fs");

// TRANSFORM THE DATA TO FIT ANY SPECIFIC NEED
/*
- Assuming you have Node.js installed in your system, cd into the project
  root folder and run the following command in your terminal to transform
  data: node data-transformation.js

- If you want to transform data into any other format, you can
   tweak the functions I have created bellow accordingly
*/

function readFromFileSync() {
  let readData;
  try {
    readData = fs.readFileSync("counties-constituencies-wards.json", "utf8");
    console.log("Successfully read data");
    return JSON.parse(readData);
  } catch (err) {
    console.error(err);
  }
}

function writeToFileSync(data) {
  try {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync(`transformed-data-${Date.now()}.json`, jsonData);
    console.log("File written successfully.");
  } catch (err) {
    console.error(err);
  }
}

function capitalizeNames(data) {
  return data.map((county) => {
    county.name = county.name.replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );

    county.constituencies.forEach((constituency) => {
      constituency.name = constituency.name.replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      );

      constituency.wards = constituency.wards.map((ward) => {
        return ward.replace(/\b\w/g, (letter) => letter.toUpperCase());
      });
    });

    return county;
  });
}

const readData = readFromFileSync();
const capitalizedValues = capitalizeNames(readData);
writeToFileSync(capitalizedValues);

// WRITING & READING FILES ASYNCHRONOUSLY
/*
function readFromFile(data) {
  let readData;
  fs.readFile("counties-constituencies-wards.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Parse the JSON data
    readData = JSON.parse(data);

    // Do something with the data
  });

  console.log(readData);
}

readFromFile();

function writeToFile(data) {
  fs.writeFile(
    `transformed-data-${Date.now()}.json`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Data written to file successfully");
    }
  );
}
*/
