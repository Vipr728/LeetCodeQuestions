/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/*There is a really neat one-liner to do this, by sorting each of the strings,
 and then checking if they are equal*/

 function validAnagram(s, t){
    return s.split('').sort().join('') === t.split('').sort().join('')
}


console.log("<---------------------------->")
console.log("ValidAnagrams:")
console.log(validAnagram("tea", "eat"))