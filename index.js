



// var num1 = 32;
// var num2 = 45; 
// var num3 = 294; 

// if( num1 > num2){
//     if (num2 > num3){
//         console.log(num1)
//     }else{
//         console.log(num3)
//     }   
// }else{
//     if(num2 > num3){
//         console.log(num2)
//     }else{
//         console.log(num3)
//     }
// }



// getting a elements using from array using for loop
// var ages = [12, 45, 69, 65, 25, 76, 24]

// for (var i = 0; i < ages.length; i++) {
//     var age = ages[i]
//     console.log(age)
// }



// convert inches to feet
function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const userInches = 24;
const userFeet = inchToFeet(userInches);
console.log(userFeet);


// convert miles to kilometer
function milesToKilometer (miles){
    const kilometer = miles *1.609;
    return kilometer;
}

const fiveKilometer = 5;
const mile = milesToKilometer(fiveKilometer);
console.log(mile);



//convert feet to inches
function feetToInches (feet){
    return feet * 12;

}

const feetValue = 5;
const inchesValue = feetToInches(feetValue)
console.log(inchesValue);



// convert centimeter to meter
function centimeterToMeter (centimeters){
    return centimeters / 100;

}

const centimetersValue = 150;
const metersValue = centimeterToMeter(centimetersValue);
console.log(metersValue);


// paper counting problem 
function paperRequirements(book1Quantity, book2Quantity, book3Quantity){

    const book1Papers = 100;
    const book2Papers = 200;
    const book3Papers = 300;

    const totalBook1Papers = book1Papers * book1Quantity;
    const totalBook2Papers = book2Papers * book2Quantity;
    const totalBook3Papers = book3Papers * book3Quantity;
    const allTogetherPapers = totalBook1Papers + totalBook2Papers + totalBook3Papers;
    return allTogetherPapers;

}

console.log(paperRequirements(2,1,2))




function bestFriend(array){
let longestName = array[0];
for ( let i = 0; i < array.length; i++){
    if(array[i].length > longestName.length){
     longestName = array[i];
    }
}
return longestName;
}

const friends = ['aminul', 'noman', 'bilal', 'vatiza', 'karim', 'amarjantus']

console.log(bestFriend(friends))
