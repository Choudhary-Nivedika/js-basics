// while loop

// let i = 1;
// while ( i<=10){
//     console.log(i);
//     i += 1;
// }


// for loop

// for(let i = 1; i <= 10; i += 1){
//     console.log(i);
// }


//do while loop
// let i =1000;
// do{
//     console.log(i);
//     i += 1; 
// }while( i <=100);


//____________break
// let i = 1;
// while ( i<=10){

//     if( i % 7 == 0){  //if i is divisible by 7
//         break;
//     } 
//     console.log(i);
//     i += 1;
// }


//____________continue

let i = 1;
while ( i<=10){

    if( i % 7 == 0){  //if i is divisible by 7
        i++;
        continue;
    } 
    console.log(i);
    i += 1;
}
