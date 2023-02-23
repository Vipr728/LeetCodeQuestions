/*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/


//we can use a hashmap to solve this in nlogn time here is how it would work:

function TopKFrequentElementsHASHMAP(nums){
    let map = new Map();
    for(let i = 0; i< nums.length; i++){
        if(map.has(nums[i]))
            map.set(nums[i], map.get(nums[i])+1)
        else 
            map.set(nums[i], 1)
    }
    //then sort out the map and then return an array which is self-explanatory
 }

//another way is to use bucket sort and store the frequencies in the key instead of the value which will take O(n)
function TopKFrequentElements(nums, k){
    let map = {};
    let bucket = [];
    let result = [];
    
    for(let i = 0; i<nums.length; i++){
        if(!map[nums[i]])
            map[nums[i]] = 1 
        else 
            map[nums[i]]++
    }
    
    for(let [num, freq] of Object.entries(map)){
        if(!bucket[freq]){
            bucket[freq] = new Set().add(num);
        } else 
            bucket[freq] = bucket[freq].add(num);
    }

    for(let i = bucket.length; i>=0; i--){
        if(bucket[i])
            result.push(...bucket[i])
        if(result.length==k)
            break;
    }

    console.log(map);
    console.log(bucket);
    return result;
}

console.log(TopKFrequentElements([1,1,1,2,2,3,3,3,3,3,3], 2))
