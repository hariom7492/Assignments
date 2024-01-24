const calculateTime = require("../promisify-setTimeout");
 
 describe("Promisefy-set timeout testing", () => {
   test("Test Case 1 ", async () => {
     const difference = await calculateTime.calculateTime(2000);
     expect(difference).toBeGreaterThanOrEqual(2000);
     expect(difference).toBeLessThan(3000);
   }, 4000);
   test("Test Case 2 ", async () => {
     const difference = await calculateTime.calculateTime(1000);
     expect(difference).toBeGreaterThanOrEqual(1000);
     expect(difference).toBeLessThan(2000);
   }, 3000);
   test("Test Case 3 ", async () => {
     const difference = await calculateTime.calculateTime(0);
     expect(difference).toBeGreaterThanOrEqual(0);
     expect(difference).toBeLessThan(1000);
   }, 2000);
   test("Test Case 4 ", async () => {
     const difference = await calculateTime.calculateTime(10000);
     expect(difference).toBeGreaterThanOrEqual(10000);
     expect(difference).toBeLessThan(11000);
   }, 12000);
 });