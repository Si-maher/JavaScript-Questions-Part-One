// 1) Create a function that capitalizes each word within a string

let textOne = 'wise men talk because they have something to say; fools, because they have to say something'

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

