// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

let strt_time = new Date();

function f()
{
    console.log("hello");

    let end_time = new Date();

    console.log(end_time - strt_time);
}

setTimeout(f, 3000);

