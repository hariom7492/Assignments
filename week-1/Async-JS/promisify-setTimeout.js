/*
     Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
 */
     async function wait(n) {
        return  new Promise((resolve, reject) => {
          if (n >= 0) {
            setTimeout(() => {
              resolve(`the promise is resolved in ${n} milliseconds`);
            }, n);
          } else {
            reject(`The Promise is rejected `);
          }
        });
      }
      async function calculateTime(n) {
        const startTime = Date.now();
         return await wait(n)
          .then((data) => {
           console.log(data);
            const endTime = Date.now();
           console.log(endTime - startTime);
            return endTime - startTime;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      
      module.exports = {
        testEnvironment: "node",
        moduleFileExtensions: ["js", "json", "jsx"],
        calculateTime,
      };
     