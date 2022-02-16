const prompt = require("prompt-sync")();
/*let    A= ['Tre'];
 let   b= ['Sonny'];
 let   c=  ['Crystal'];
 let   d=  ['Ilyas'];
 let   e=  ['Greg'];
 let   f= ['Fernando'];
 let   g=['Timothy'];
 let   h= ['Patrick'];
 let   i= ['Steve'];
 let   j=['Jimothy'];
 let   k= ['Pat'];
 let   l=['Arnold'];
 let   m= ['Andy'];
let x = 0
 while (x === 100)
 x++;{
console.log(A)
x++
console.log(c)
x++
console.log(d)
x++
console.log(e)
x++
console.log(f)
x++
console.log(g)
x++
console.log(h)
x++
console.log(i)
x++
console.log(j)
x++
console.log(k)
x++
console.log(l)
x++
console.log(m)
x++

}*/

/*const grades = [100, 80, 110, 75, 83, 64];
grades.reverse();
let x = 0;
while (x!==100) x++;{
    console.log(grades);
}*/
/*const posNumber=[5,2,13,17,4,102,3000];
let a = posNumber.splice(1,1);
let b = posNumber.splice(3,6);
{console.log(a,b);}*/

/*const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
let a = mixedSignNumbers.concat(-2,-8,14).slice(7,11);
let b 
{console.log(a);}*/

/*const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(100);
fibonacciNumbers.push(2,3);


for (let count = 0; count < fibonacciNumbers.length; count++) {
    console.log(fibonacciNumbers[count]);
    
}*/

/*const array = [1,2,3,4,5];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}*/

/*const array =[];
array.push(3,2,1);
array.unshift(1,2);
console.log(array);

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}*/

/*
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
let a = students.slice(3,11);
for (let index = 0; index < students.length; index++) {
   console.log(a[index]);
}*/ 
/*
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  let b =students.slice(3,11);
 
  for (let index = 0; index < students.length; index++) {
      console.log(b[index]);
      
  }
 for (let index = 0; index < students.length; index++) {
     console.log(students[index]);
     
 }*/
/*
 const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur'];
 dinosaurs.splice(4,7)

 for (let index = 0; index < dinosaurs.length; index++) {
console.log(dinosaurs[index]);
     
 }*/
 /*const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
let a =dinosaurs.join('*');
console.log(a);*/
/*
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
    dinosaurs.reverse();
   console.log(dinosaurs);*/
/*
   const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
let a = primaries.concat('orange','green','purple');
for (let index = 0; index < a.length; index++) {
    console.log(a,'>'[index]);
        
}
for (let index = 0; index < primaries.length; index++) {
    console.log(primaries,'>'[index]);
    
}
for (let index = 0; index < secondaries.length; index++) {
   console.log(secondaries,'>'[index]);
    
}*/

let userArray = JSON.parse(prompt("enter your array:"));
userArray.includes(Number);
for (let index = 0; index < userArray.length; index++) {
   console.log(userArray);
    
}
