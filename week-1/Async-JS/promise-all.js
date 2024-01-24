function wait1(t) {
  return new Promise((resolve, reject) => {
    if (t > 0) {
      setTimeout(() => {
        resolve("The total time for wait1 is::" + t);
      }, t);
    } else {
      reject("error or time is not defined for timeout for wait1");
    }
  });
  
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    if (t > 0) {
      setTimeout(() => {
        resolve("The total time for wait2 is::" + t);
      }, t);
    } else {
      reject("error or time is not defined for timeout for wait2");
    }
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    if (t > 0) {
      setTimeout(() => {
        resolve("The total time for wait3 is::" + t);
      }, t);
    } else {
      reject("error or time is not defined for timeout for wait 3");
    }
  });
}

async function calculateTime(t1, t2, t3) {
  try {
    const data1 = await wait1(t1);
    console.log("waiting for work 1:::");
    console.log(data1);
    
    console.log("waiting for work 2:::");
    const data2 = await wait2(t2);
    console.log(data2);
    
    console.log("waiting for work 3:::");
    const data3 = await wait3(t3);
    console.log(data3);
    
    console.log("total time for the program is::");
    console.log(t1 + t2 + t3);
    return t1 + t2 + t3;
  } catch (error) {
    console.log(error);
  }
}
