/*
Quadratic algorithm

The quadratic algorithm is almost the REVERSE of the logarithmic algorithm. 

The number of steps required by the quadratic algorithms is the SQUARE  root of input size. 
If the input size is 2, then the required steps are 4. If the input is size 8, it will take 64, and so on. and we mark it as O(n²).

BUBBLE SORT

  Bubble sort compares  ADJACENT  elements, It starts with the first two elements and it interchanges
  them if the first element is larger than the second element. 
  it repeats the same steps until it reaches the end of the array. 
  again the same steps will repeat from the i+1 element.

 */

  // Example: NESTED  loops  

  // Implementing Bubble sort algorithm

//   function BubbleSort(arr){


//     for(let i = 0; i < arr.length; i++){

//       // looping INNER ARRAY 
//       for(let j = i + 1; j < arr.length; j++){

//         if(arr[i] < arr[j]){  

//           let tempVal = arr[i] 
         
//           arr[i] = arr[j]

//           arr[j] = tempVal 

//         }
//       }
//     }
//     return arr;
//   }
// const nestedArray =[[2,2,2,2],[2,2,2,2],[2,2,2,2]]    

// console.log(BubbleSort(nestedArray))


  // BUBBLE-SORT LEETCODE SOLUTION 
  /* 
  You are given an array of strings names, and an array heights that consists of distinct positive integers. 
  Both arrays are of length n.
  For each index i, names[i] and heights[i] denote the name and height of the ith person.  


  Return names sorted in descending order by the people's heights.
  // SOLUTION
  */
//  function sortPeople(names, heights){   

//   // declare an empty array for the results 

//   let results = [];  

//   // loop through the names array
//   for(let i = 0; i < names.length; i++){       

//     // push the resulting object interms of key value pairs to the initialized result array  

//     results.push({names: names[i], heights: heights[i]})
//   }
//   //  sort the heights array in a descending order   

//   let sortedHeightArray = results.sort((a, b) => b.heights - a.heights);
//   // map the names using the sorted heights array  
//   return sortedHeightArray.map(el => el.names);   

//  }

             const students = ["Vick", "Deno","Eddy", "Dero"] 
             const heights = [7,5,9,7]  

function sortedHeights (names , heights){  
  let result = []    
  // form array of objects of each person
         for (let index = 0; index < names.length; index++) {

              result.push({name: names[index], height: heights[index]}) 

         }     
          //  access every height in the object 
         const sortHeights = result.sort((a,b)=> b.height - a.height).map(name => name.name) 

         return sortHeights ;
    
};   

console.log(sortedHeights(students,heights))
        




  
