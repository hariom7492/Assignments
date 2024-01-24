const calculateTime = require("../promise-chain");
 describe("calculateTime function", () => {
   test("calculates time 1", async () => {
     const difference = await calculateTime.calculateTime(1000, 2000, 3000);
     expect(difference).toBeGreaterThanOrEqual(6000);
     expect(difference).toBeLessThan(7000);
   }, 8000);
 
   test("calculates time 2", async () => {
     const difference = await calculateTime.calculateTime(4000, 5000, 7000);
     expect(difference).toBeGreaterThanOrEqual(16000);
     expect(difference).toBeLessThan(17000);
   }, 18000);
 
   test("calculates time 3", async () => {
     const difference = await calculateTime.calculateTime(10000, 1000, 1000);
     expect(difference).toBeGreaterThanOrEqual(12000);
     expect(difference).toBeLessThan(13000);
   }, 14000);
 
   test("calculates time for zero seconds", async () => {
     const difference = await calculateTime.calculateTime(0, 0, 0);
     expect(difference).toBeGreaterThanOrEqual(0);
     expect(difference).toBeLessThan(1000);
   }, 1000);
 });