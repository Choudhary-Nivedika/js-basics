//### if esle

// console.log("Starting...");
// let isUserSignedIn = false; // this denotes that user is signed in to the app
// let isPaidUser = true;

// if (isUserSignedIn == true && isPaidUser == true) {
//     //this particular block will only execute if the condition mentioned is true
//     console.log("Show the dashboard")
// }

// else {
//     console.log("Show the homepage")
// }

// console.log("End...");



//#########  else if

// let userSubscription = "unsubscribed";

// if (userSubscription ="unsubscribed"){
//     console.log("Show pricing page")
// }
// else if (userSubscription ="super"){
//     console.log("only hindi content")
// }
// else {
//     console.log("Show all content")
// }


// console,log("end");

//###nested if 

let isUserSubscribed = true;
let userHasLionGatePlay = false;
let userHasSony = true;

if (isUserSubscribed){
    if (userHasLionGatePlay){
        console.log("Watch John Wick");
    }
    else if (userHasSony){
        console.log("Show the guardian");
    }
    else{
        console.log("Shoe Panchaayat");
    }
}