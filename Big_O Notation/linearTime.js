/*
Linear time algorithm

The execution time of the function is directly proportional to the input size. 

the RUN TIME  of the function grows as the input grows, and we mark it as O(n).

// Example: Looping over an array to get each array element
 */

function findArrayElements(arr){
  // for(let i = 0; i  < arr.length; i++){

  //  console.log(`Element in an array is ${arr[i]}`)

  // }     

  // INCREASED--BIGGER  RUNTIME DUE TO METHOD foreach
  
  arr.forEach(element =>  console.log(`ELEMENT IN ${element}`)  );

  return null;
}   




//  O(n) => SAME Time Complexity  due how it iterating through Array (one layer)
    // n-input size

// 

const myArray = [45, 7, 89, 4,0];   

// const myArray2 = [45, 7, 89, 4,0,6,78,8,89,9,78,90];


const start = performance.now()
findArrayElements(myArray); 
const end = performance.now()  

console.log(`Run time ${end - start}`)    

// const begin = performance.now()

// findArrayElements(myArray2); 
// const finish = performance.now()  
 console.log(`Run time ${finish - begin}`)
   










   
