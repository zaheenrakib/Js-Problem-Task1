function countVowels(vowels){
    count =  [];
    for(item of vowels){
        if(item === 'a' || item === 'e' || item === 'i'  || item === 'o' || item === 'u'){
            count.push(item);
        }
    }
    return count.length;
}

const vowels = "I am a full Stack Web developer a e i o u A E I O U";

const countVowel = countVowels(vowels.toLowerCase());

console.log(`The String Count Vowels ${countVowel} Times`);