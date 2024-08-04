// setTimeout => đếm ngược thời gian để làm 1 nhiệm vụ nào đó
/**
 * setTimeout(function(){}, t)
 * - function(){}: sau t giây thì function sẽ được thực thi
 * - t: millisecond=> VD: 3000 <=> 3s
 */

// setTimeout(function () {
//   console.log("Line 1");
// }, 3000);

// setTimeout(function () {
//   console.log("Line 9");
// }, 0);

// console.log("Line 2");

/**
 * setTimeInterval(function(){}, t)
 * - function(){}: sau mỗi t giây thì function sẽ được thực thi
 * - t: millisecond=> VD: 3000 <=> 3s
 */

// let button = document.querySelector("button");
// button.disabled = false;

// let clear_interval_btn = document.getElementById("clear_interval");
// let count = 0;
// let myInterval_demo = setInterval(function () {
//   console.log(count);
//   count = count + 1;

//   if (count == 10) {
//     clearInterval(myInterval_demo);
//   }
// }, 1000);

// console.log("count: ", c);
// console.log("Hihi");

// Bài start, pause, continue

let start_btn = document.getElementById("start_btn");
let pause_btn = document.getElementById("pause_btn");
let continue_btn = document.getElementById("continue_btn");
let count_number = document.getElementById("count_number");

// let c = 0;
// let myInterval;

// start_btn.addEventListener("click", function () {
//   start_btn.disabled = true;
//   c++;
//   count_number.innerText = c;
//   myInterval = setInterval(function () {
//     pause_btn.disabled = false;
//     count_number.innerText = c;
//     c++;
//   }, 1000);
// });

// pause_btn.addEventListener("click", function () {
//   pause_btn.disabled = true;
//   continue_btn.disabled = false;
//   clearInterval(myInterval);
// });

// continue_btn.addEventListener("click", function () {
//   continue_btn.disabled = true;
//   c++;
//   count_number.innerText = c;
//   myInterval = setInterval(function () {
//     pause_btn.disabled = false;
//     count_number.innerText = c;
//     c++;
//   }, 1000);
// });

setInterval(function () {
  let date = new Date();
  console.log(date.getHours(), date.getMinutes(), date.getSeconds());
}, 1000);
