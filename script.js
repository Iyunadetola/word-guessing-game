let wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to a indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "cpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]

// fetch("https://random-word-api.herokuapp.com/all")
// .then(res=> res.json())
// .then(data => console.log(data))
// .catch(error => console.log('error'))

let inputt = document.querySelector('.inputs');
let ResetBtn = document.querySelector('.reset-btn')
let Hint = document.querySelector('.hint span')
let Type = document.querySelector('.text-box')
let wrongLetter = document.querySelector('.wrong span')
let remGuess = document.querySelector('.guess span')



 let word = '';
 let wrong = [];
 let correct=[];
 let maxGuess = []

function Random(){
   let randomObject = wordList[Math.floor(Math.random()* wordList.length)]
console.log(randomObject)


   word = randomObject.word;
   maxGuess = 8;
   console.log(word)

   let news = "";
    for (let i=0; i < word.length ; i++ ){
    news += `<input type="text" disabled >`;
}
inputt.innerHTML =  news
Hint.innerHTML = randomObject.hint
remGuess.innerText = maxGuess

}
Random()
function start(e){
    let key = e.target.value
    if (key.match(/^[A-Za-z]+$/) && !wrong.includes(`${key}`) && !correct.includes(key) ){
    console.log(key)
    }if(word.includes(key)){
        for (let i = 0; i < word.length; i++){
            if(word[i]=== key){
                correct.push(key)
                inputt.querySelectorAll('input')[i].value = key;
            }
        }
        console.log("ok")
    } else{
        maxGuess--;
        wrong.push(`${key}`)
        console.log("not ok")
    }
    remGuess.innerText = maxGuess;
    wrongLetter.innerText = wrong;
    Type.value = '';

    if (correct.length === word.length){
        alert(`congratulations, you found ${word.toUpperCase()}`)
        Random()
    }
    if(maxGuess < 1 ){
        alert('games over');
        for (let i = 0; i < word.length; i++) {
            inputt.querySelectorAll("input")[i].value = word[i];
            
        }
    }
}

ResetBtn.addEventListener('click', Random)
document.addEventListener('keydown', ()=>{
    Type.focus()
} )
Type.addEventListener('input', start)


