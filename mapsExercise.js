//what does the following code return?

new Set([1,1,2,2,3,4])
//will return the set of numbers without the duplicates

// [...new Set('referee')].join('');
//will return the string of referee without the duplicates (e), ref

//what does the Map m look like after running the code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//first array(3) equals true, second array of (3) equals false

//hasDuplicate
function hasDuplicate(arr){
    return new Set(arr).size !== arr.length;
}
//vowel count

function isVowel(character){
    return 'aeiou'.includes(character);
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let character of str){
        let lowerCaseChar = character.toLowerCase();
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) +1);
            }
            else{
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}
