// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) {
  console.log(x);
}

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));

//----------------Learning how to code --------------------
// use code wars for challenge practice
// taking note
//Solving problem using 4 steps frame work
//1. make sure you understand the problem 100%. Ask the right question to get a clear picture of the problem
//2. Divide and conquer: Break a big problem into smaller sub-problems.
//3 Don't be afraid to do as much research as you have to e.g Google, Stack overflow, MDN web docs
// For bigger problems, write pseudo-code before writing the actual code

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do? -- Ignore

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//   }
//   console.log(max);
// };

// const calcTempAmplitude = function (temps) {
//   let amplitude;
//   let min = 0;
//   let max = 0; // max could also be initiated to be 0 since there will be looping through all the elements of array
//   for (let i = 0; i < temps.length; i++) {
//     let currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') {
//       continue;
//     }
//     if (currentTemp > max) {
//       max = currentTemp;
//     }
//     if (currentTemp < min) {
//       min = currentTemp;
//     }
//     amplitude = max - min;
//   }
//   console.log(max);
//   console.log(min);
//   console.log(amplitude);
//   return amplitude;
// };

// calcTempAmplitude(temperatures);

//Problem 2: Function should now receive 2 arrays of temps

// const calcTempAmplitudeNew = function (t1, t2) {
//   let temps = t1.concat(t2);
//   let amplitudeNew;
//   let min = 0;
//   let max = 0; // max could also be initiated to be 0 since there will be looping through all the elements of array
//   for (let i = 0; i < temps.length; i++) {
//     let currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') {
//       continue;
//     }
//     if (currentTemp > max) {
//       max = currentTemp;
//     }
//     if (currentTemp < min) {
//       min = currentTemp;
//     }
//     amplitudeNew = max - min;
//   }
//   console.log(max);
//   console.log(min);
//   console.log(amplitudeNew);
//   return amplitudeNew;
// };
// let arrayTest = [2, 19, 0, -43, 'error', 34, -10];
// calcTempAmplitudeNew(temperatures, arrayTest);

//-- DEBUGGING ----

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Math.floor(Math.random() * 100),
    // value: Number(prompt('Degree Celcius:')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  let temps = t1.concat(t2);
  console.log(temps);
  let amplitudeNew;
  let min = temps[0]; // min value cannot be initiated at 0 because if all the elements in the array are > 0
  // then a false minimum has been set which will affect the amplitude value. To test this , make all the elements in the array a positive value
  let max = temps[0]; // max value cannot be initiated at 0 because if all the elements in the array are < 0
  // then a false maximum has been set which will affect the amplitude value. To test this , make all the elements in the array a negative value
  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== 'number') {
      continue;
    }
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
    amplitudeNew = max - min;
  }
  console.log(max);
  console.log(min);
  console.log(amplitudeNew);
  return amplitudeNew;
};
let arrayTest = [-2, -19, -5, -43, 'error', -34, -10];
calcTempAmplitudeBug([-11, -12, -13], arrayTest);
