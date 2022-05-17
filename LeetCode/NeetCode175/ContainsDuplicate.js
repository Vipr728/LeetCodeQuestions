/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/


//BruteForce Solution

/*For this solution we could loop through the array and check if nums[i] is present anywhere 
 by searching through the array again */

 function bruteForce(nums){
    for(let i = 0; i< nums.length; i++){
        //search through the array
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    //return false if we haven't found any duplicates
    return false;
}

console.log("<---------------------------->")
console.log("BruteForce Approach:")
console.log(bruteForce([1,2,3,1]));


/* Another method we could do is sort the array, this would make the process much easier since 
the duplicates will be adjecent to each other*/

function sortingApproach(nums){
    nums.sort();
    for(let i = 0; i<nums.length; i++){
        //check if the number adjecent to the iᵗʰ element  are both equal
        if(nums[i+1] === nums[i])
        return true;
    }
    return false;
}

console.log("<---------------------------->")
console.log("Sorting Approach:")
console.log(sortingApproach([1,2,3,4,2,1]))

/*You might have noticed, we arent using any space here, the space complexity is just O(1)
  We could use some variables like an array to turn down the time complexity
  We could use an array by storing values that are already in the array, and then checking
  if the hashmap contains the digit. I think you could understand better with code:
*/

function OptimalApproach(nums){
    let arr = [];
    
    for(let num of nums){
        if(arr.includes(num)){
            return true;
        }else {
            arr.push(num);
        }
    }
    return false;
}


console.log("<---------------------------->")
console.log("Optimal Approach")
console.log(OptimalApproach([1,2,3,4,2,1]))
