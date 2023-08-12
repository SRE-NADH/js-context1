let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  arr.forEach((element)=>{
   if(element.profession==="developer"){
    console.log(element.name);
   }
   })
}

function addData() {
  //Write your code here, just console.log
  let employe = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(employe);
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
    if(arr[i].profession==="admin") arr.splice(i,1);
  }
  console.log(arr);
}

function concatenateArray() {
  let arr2 = [
    {id:5,name:"sreenadh",age:23,profession:"unemployed"}
  ]
 arr = arr.concat(arr2);
 console.log(arr);
  //Write your code here, just console.log
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
