import {dictionary, getDictionary} from "./dictionary/dictianary.js";
const right = document.querySelector('#right');
const left= document.querySelector('#left');
const title= document.querySelector('h2');

const isLeftFirst = Math.random() > 0.5;




const language = getRandomLanguage();
const dir = dictionary[language];

// there mast be rundom side left or right in rundom language


let titleInner = isLeftFirst?dir.left:dir.right;
renderTitle(titleInner)


function getRandomLanguage() {
    const languages = Object.keys(dictionary); // Получаем список всех языков
    const randomIndex = Math.floor(Math.random() * languages.length); // Случайный индекс
    return languages[randomIndex]; // Возвращаем случайный язык
};

function renderTitle(value){
    title.innerText = value;
}