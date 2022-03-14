// FUNCTION EXERCISE
// 1
function fozzieBear(){
    console.log("Wocka Wocka!");
}
fozzieBear(); // Wocka Wocka!

console.log(`==============`);

// 2
function beaker (speak){
  console.log(speak);
  console.log(speak);
  console.log(speak);
  console.log(speak);
}
beaker("Meep");
/*
Meep
Meep
Meep
Meep
*/

console.log(`==========`);

// 3
function muppetShow(a, b){
    if (a === "Muppet" && b === "Show"){
      console.log("It's time to play the music. It's time to light the lights.");
    }
  }
  muppetShow(`Muppet`, `Show`); // It's time to play the music. It's time to light the lights.
  muppetShow(`Hello`, `Bye`); // Does NOT display anything in the terminal/console
  
  console.log(`===========`);

// 4
function kermit(){
    return "Kermit The Frog";
}
kermit(); // Does NOT display anything in the terminal/console
console.log(kermit()); // Kermit The Frog
  
console.log(`===============`);
  
// 5
function muppetShowSeasons(seasons){
  if (seasons === 5){
    return true;
  } else {
    return false;
  }
}
console.log(muppetShowSeasons(5)); // true
console.log(muppetShowSeasons(3)); // false

console.log(`===========`);

// 6
const manOrMuppet = () => {
    console.log("Am I a man or am I a Muppet");
}
// OR
// const manOrMuppet = function() {
//   console.log("Am I a man or am I a Muppet?");
// }

manOrMuppet(); // Am I a man or am I a Muppet?

console.log(`==============`);

// 7 
rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
// OR
// rainbowConnection = () => (
//   "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me"
// );

console.log(rainbowConnection()); // Someday we'll find it. The Rainbow connection. The lovers, the dreamers and me


// 8
// No 

// 9
// Yes 

// 10a
const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
];
  
// 10b
const upperMovies = newMuppetMovies.map(function(u){
    return u.toUpperCase();
});
console.log(upperMovies); // [ 'THE MUPPETS', 'MUPPETS MOST WANTED' ]

console.log(`=============`);

// Bonus 
// 11a
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 11b
const twoMovies = oldMuppetMovies.filter(a => a.length === 22);
// Or
// const twoMovies = oldMuppetMovies.filter(a => a === "The Great Muppet Caper" || a === "Muppet Treasure Island");
console.log(twoMovies); 

console.log(`==================`);

// 12a
const charactersOne = [
    "Statler",
    "Waldorf"
];
  
  // 12b
  const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
];
  
// 12c
randomMuppet = characters => {
  const random = Math.floor(Math.random() * characters.length );
  console.log(characters[random]);
}  

// 12d
randomMuppet(charactersOne); // Statler or Waldorf
randomMuppet(charactersTwo); // The Swedish Chef or Animal or Rowlf

console.log(`=====================`);

// 13
// 13
// caps = string => {
//   let newString = ``;
//   for (i = 0; i < string.length; i++){
//     if (i % 2 === 0){
//       newString += string[i].toUpperCase();
//     } else {
//       newString += string[i].toLowerCase();
//     }
//   }
//   return newString;
// }
// console.log(caps(`Hello`)); // HeLlO

// 13 (Extra Bonus)
caps = string => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++){
      if (string[i] === ` `){
        newString += ` `;
      } else if (count % 2 === 0){
        newString += string[i].toUpperCase();
        count++;
      } else {
        newString += string[i].toLowerCase();
        count++;
      }
    }
    return newString;
  }
  console.log(caps(`Hello World`)); // HeLlO wOrLd
  

