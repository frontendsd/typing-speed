
const randomText = document.querySelector('.random-text')
const scoreEl = document.querySelector('.score')
const highScoreEl = document.querySelector('.high-score')
const inputText = document.querySelector('.input-text')
const time = document.querySelector('.time-piece')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const again = document.querySelector('.again')
const newScore = document.querySelector('.scoreNew')
const highScoreNew = document.querySelector('.high-score-new')
const levelEl = document.querySelector('#level')

inputText.focus()

inputText.addEventListener('input', changeEl)
again.addEventListener('click', reset)
levelEl.addEventListener('change', changeLevel)

let randomEl

const api = 'https://random-words-api.vercel.app/word'
function randomNewWord() {
    fetch(api).then((data) => {
        return data.json()
    })
    .then(getWords)
    function getWords(data) {
        let newWord = data[0].word.toLowerCase()
        randomEl = newWord
        randomText.textContent = newWord
    }
}
randomNewWord()

let score = 0
let highscore = 0
let timer = 10
let level = localStorage.getItem('level') ? localStorage.getItem('level') : localStorage.getItem('medium')

levelEl.value = localStorage.getItem('level')


function changeEl() {
    if(randomEl == inputText.value) {
    randomNewWord()
    inputText.value = ""
    score++
    scoreEl.textContent = score


    if(level == 'easy') {
        timer += 5
    }else if(level == 'medium') {
        timer += 3
    }else {
        timer += 2
    }
}
}


// changeLevel

function changeLevel() {
    localStorage.setItem('level' , levelEl.value)
    level = levelEl.value
}

const counter = setInterval(()=> {
    if(timer>0) {
        timer--
        time.textContent = timer
        if(timer == 0) {
            modal.classList.remove('hidden')
            overlay.classList.remove('hidden')
            newScore.textContent = score
            if(score > highscore) {
                highscore = score
                highScoreEl.textContent = highscore
                highScoreNew.textContent = highscore
                setInterval(counter)
            }
        }

    }
},1000)

function reset() {
    score = 0
    highscore = 0
    randomText.textContent = randomEl
    scoreEl.textContent = "0"
    timer = 10
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    inputText.value = ""
}









// const person = {
//     name:'Shukrullo',
//     age:20
// }

// localStorage.setItem('obj',JSON.stringify(person))
// const localDate = localStorage.getItem('obj')
// const personinfo = JSON.parse(localDate)

// personinfo.name = "Zaylobidinov"
// console.log(personinfo);



// const newObj = {
//     name:'Shukrullo',
//     age: 20
// }

// localStorage.setItem('obj', JSON.stringify(newObj))

// const localDate = localStorage.getItem('obj')

// const newLocalDate = JSON.parse(localDate)
// newLocalDate.name = "Zaylobidinov"
// console.log(newLocalDate);
// localStorage.setItem('updatedInfo', JSON.stringify(newLocalDate))













