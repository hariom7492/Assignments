/*File cleaner
   Read a file, remove all the extra spaces and write it back to the same file.
       For example, if the file input was
   hello     world    my    name   is       raman
   After the program runs, the output should be
   hello world my name is raman
  */
   const fs = require('fs').promises;
   async function cleanFile(filePath) {
     try {
       let data= await fs.readFile(filePath,'utf-8');
       console.log("The Data of the Given file is :::");
       console.log(data.toString());
       let modifiedData=data.replace(/\s{2,}/g," ");
       console.log("Modified Data is:");
       console.log(modifiedData);
       await fs.writeFile(filePath,modifiedData);
   
     } catch (error) {
       console.error('Error cleaning the file:', error.message);
     }
   }
   cleanFile("./sample.txt");
 
 module.exports = cleanFile;