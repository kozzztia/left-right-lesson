import { dictionary, getDictionary } from "./dictionary/dictianary.js";
const buttons = document.querySelectorAll('button');
const title = document.querySelector('h2');
const score = document.querySelector('h4');
const languageTitle = document.querySelector('h3');

let count = 0;

score.innerText = 'lets start to lern';

function renderGame() {
    const isLeftFirst = Math.random() > 0.5;
    const language = getRandomLanguage();
    const dir = dictionary[language];

    title.innerText = dir[isLeftFirst?'left':'right'];
    languageTitle.innerText = language;


    buttons.forEach(item => item.onclick = buttonHandler)

    function buttonHandler(){
        const result = dir[this.id] === title.innerText;

        if(!result){
            count--;
        }else{
            count++;
        }

        if (count > 10) {
            score.innerText = `${count}: you are the best`;
        } else if (count > 5) {
            score.innerText = `${count}: good`;
        } else if (count >= 2) {
            score.innerText = `${count}: normal`;
        } else if (count < 2 && count >= -2) {
            score.innerText = `${count}: noob`;
        } else if (count < -2 && count >= -5) {
            score.innerText = `${count}: really?`;
        } else if (count < -5 && count >= -10) {
            score.innerText = `${count}: bad`;
        } else if (count < -10) {
            score.innerText = `${count}: go to sleep`;
        }
        renderGame()
    } 

}

renderGame()


function getRandomLanguage() {
    const languages = Object.keys(dictionary);
    const randomIndex = Math.floor(Math.random() * languages.length);
    return languages[randomIndex];
};














// function guesPosition(){

//    const result= dictionary[language][this.id] === titleInner;


//    console.log(result)
// }