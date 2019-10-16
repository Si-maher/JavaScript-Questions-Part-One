// 1) Create a function that capitalizes each word within a string

let textOne = 'wise men talk because they have something to say; fools, because they have to say something'

let textTwo = 'only the dead have seen the end of war'

function capitalizeWords (sentence) {
    let words = sentence.split(" ")
    let newString = []
    for (i = 0; i < words.length; i ++){
        newString.push(words[i][0].toUpperCase()
         + words[i].slice(1))
    }
    return newString
}
console.log(capitalizeWords(textOne));

// 2) Create a function that checks the text and returns the word with the longest length.

let textThree = 'The beginning is the most important part of work'

function longestWord (sentence) {
    let words1 = sentence.split(" ")
    let longestWord = ''
    for (i = 0; i < words1.length; i ++){
        if (words1[i].length > longestWord.length) {
            longestWord = words1[i]
        }
    }
    return longestWord
}
console.log(longestWord(textThree));
