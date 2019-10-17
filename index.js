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

// 3) Find the unique item(s) in an array

let shoppingCart = ['apples', 'oranges','apples', 'pears', 'pears']


function uniqueItems() {
    let uniqueItem = []
    shoppingCart.forEach((item)=> {
        if(shoppingCart.indexOf(item) === shoppingCart.lastIndexOf(item)){
            uniqueItem.push(item)
        }
    })
    return uniqueItem

    
}
console.log(uniqueItems(shoppingCart));

// 4) Check to see if an array of objects contains devicePixelRatio. Return Boolean 

let people = [
    {
        id:2,
        name: 'Simon',
        pilot: true
    },
    {
        id:7,
        name: 'Dave',
        pilot: false
    },
    {
        id:7,
        name: 'Peter',
        pilot: true
    }
]

 let pilots = people.some(function(item){
    return item.pilot 
})
console.log(pilots);
