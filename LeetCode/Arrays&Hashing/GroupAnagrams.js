/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
*/

//We could first sort each string, and store them in an object as a key. check if the key exists, append if it does, add if it doesn't

function GroupAnagrams(strs){
    let obj = {}
    for(let s of strs){
        let key = s.split('').sort().join('');
        if(!obj[key]){
            obj[key] = [s];
        }else {
            obj[key].push(s)    
        }
    }
return(Object.values(obj));
}


console.log("<---------------------------->")
console.log("GroupAnagrams:")
console.log(GroupAnagrams(["eat","tea","tan","ate","nat","bat"]))


