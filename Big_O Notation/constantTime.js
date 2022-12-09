/*
Constant time algorithm

An algorithm is said to run in CONSTANT time. 
It means that as you increase the size of the input to the function. 
The execution time REMAINS the SAME .    

 */

// Example: Accessing an element inside an array using its  


function printTheLastElementOfArray(arr){

  return `The last element of the array is ${arr[arr.length - 1]}`;
  
}
   
// LESS RUN TIME--ALways begin with operations which require less complexity
const start = performance.now()
printTheLastElementOfArray([2, 3, 5, 7, 9]);  

const end = performance.now() 

console.log(`Run time is ${end - start} ms`)


// O(1) => Time Complexity is CONSTANT IN BOTH  despite difference in Array Sizes(RUN TIME) 
// They are not iterating over the array but locating the last item thus constant time complexity  



const begin = performance.now()
 printTheLastElementOfArray([,78 ,79, 790, 23, 65,  78, 990,797,970]);
const finish = performance.now()  

console.log(`RUN time 2 is ${finish - begin} ms`)