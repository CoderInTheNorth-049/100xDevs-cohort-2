// 3. Create a terminal clock (HH:MM:SS)

let time = new Date();

let hr = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

console.log(`${hr}:${min}:${sec}`);