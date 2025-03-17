// // using the below syntax we can define our function/blackbox

// function greetingToEveryone(){
//     console.log("My logic line 1");
//     console.log("My logic line 2");
//     console.log("My logic line 3");
// }

// greetingToEveryone(); // calling our function
// greetingToEveryone(); // calling our function
// greetingToEveryone(); // calling our function
// greetingToEveryone(); // calling our function
// greetingToEveryone(); // calling our function

// console.log(Math.sqrt(100));


//-----------function with input----

// function isEvenOrOdd(x){
//     // x -> parameters -> placeholder -> excepted input
//     if (x % 2 ==0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
// }

// isEvenOrOdd(97); //97 -> argument ->actual input
// isEvenOrOdd(10); //10 -> argument ->actual input

// ---function with multiple parameters---
 
// function multiply(a, b){
//     //a and b both are expected inputs

//     console.log(a*b);
// }

// multiply(2,3);//a and b both are actual values
// multiply(3); // b is undefined


// ///-----function with return keyword-----
// function isEvenOrOdd(x){
//     if (x % 2 ==0){
//         // if x is divisible by 2
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// const ans = isEvenOrOdd(10);
// console.log(ans);



// //----function with no return value
// function test(){
//     let x = 10;
//     x += 2;
// }

// let ans = test();
// console.log(ans);
// // console.log(test());



// //--function with multiple parameters
// function add (x,y){
//     return x + y;
// }

// console.log(add(10,20));
// console.log(add(10));


//--function with default parameters
// function add (x,y=5){
//     return x + y;
// }

// console.log(add(10));
// console.log(add(10,20));

// function add (x,y=5,z){
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     return x + y + z;
// }

// console.log(add(10,20));

///-----functionn with unlimited parameters

function fun(...values){
    //...values represent rest parameters
    console.log(values);
}

fun(10, 20, 30, 40 ,50);








