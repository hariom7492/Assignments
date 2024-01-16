/*
  File cleaner
  Read a file, remove all the extra spaces and write it back to the same file.
      For example, if the file input was
  hello     world    my    name   is       raman
  After the program runs, the output should be
  hello world my name is raman
 */
const fs = require('fs');

async function cleanFile(filePath) {
  

  try {
    const data =  fs.readFileSync(filePath, 'utf8');
    const modifiedContent = data.replace(/\s+/g, ' ');

   fs.writeFileSync('./test.txt', modifiedContent, 'utf8');
    console.log("Updated successfully");
  } catch (error) {
    console.error('Error cleaning the file:', error.message);
  }
}
module.exports = cleanFile;
