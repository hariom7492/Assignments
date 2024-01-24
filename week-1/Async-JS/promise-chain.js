async function wait1(t) {
    return new Promise((resolve, reject) => {
      if (t >= 0) {
        setTimeout(() => {
          resolve("The total time for wait1 is::" + t);
        }, t);
      } else {
        reject("error or time is not defined for timeout for wait1");
      }
    });
  }
  async function wait2(t) {
    return new Promise((resolve, reject) => {
      if (t >= 0) {
        setTimeout(() => {
          resolve("The total time for wait2 is::" + t);
        }, t);
      } else {
        reject("error or time is not defined for timeout for wait2");
      }
    });
  }
  
 async function wait3(t) {
    return new Promise((resolve, reject) => {
      if (t >=0) {
        setTimeout(() => {
          resolve("The total time for wait3 is::" + t);
        }, t);
      } else {
        reject("error or time is not defined for timeout for wait 3");
      }
    });
  
 }

//  async function calculateTime(t1, t2, t3) {
//   const startTime=Date.now();
//    return wait1(t1)
//     .then((data1) => {
//       // console.log("waitting for work 1:::");
//       // console.log(data1);
//       //console.log("waitting for work 2:::");
//       wait2(t2)
//         .then((data2) => {
//           //console.log(data2);
//           //console.log("waitting for work 3:::");
//           wait3(t3)
//             .then((data3) => {
//               //console.log(data3);
//               // console.log("total time for the program is::");
//               // console.log(t1 + t2 + t3);
//               const endTime=Date.now();
//              // console.log("total time  to execute the entire program is :",(endTime-startTime)) 
//               return endTime-startTime; 

//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// //  calculateTime(1000,2000,3000);
 async function calculateTime11(t1,t2,t3){
  const startTime=Date.now();
  try {
    console.log("waiting for wait 1");
     await wait1(t1).then((data)=>{
      console.log(data);
     });
     console.log("waiting for wait 2");
     await wait2(t2).then((data)=>{
      console.log(data);}); 
     console.log("waiting for wait 3");
     await wait3(t3).then((data)=>{
      console.log(data);}); 
     const endTime = Date.now();
     console.log("total time of the entire program is::",endTime - startTime)
     return endTime - startTime;
   } catch (error) {
     console.log(error);
   }
}
//calculateTime11(1000,0,3000);
module.exports = {
  testEnvironment:'node',
  moduleFileExtensions:['js','json','jsx'],
  calculateTime11};