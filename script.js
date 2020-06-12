var throws = ['Backhand','Forehand','Scoober','Hammer','Thumber'];
var discs = ['Putter','Mid-Range','Fairway Driver','Distance Driver'];
var currentSelector = throws;

//SELECTORS
const throwButton = document.querySelector('#throw-button');
const discButton = document.querySelector('#disc-button');
const refreshButton = document.querySelector('.refresh-circle');
const throwType = document.querySelector('.throw-type');

//EVENT LISTENERS

throwButton.addEventListener('click',changeSelectorToThrow);
discButton.addEventListener('click',changeSelectorToDisc);
refreshButton.addEventListener('click',refreshSelector);

//FUNCTIONS

function changeSelectorToThrow(event) {
    currentSelector = throws;
    alert('test')
}

function changeSelectorToDisc(event) {
    currentSelector = discs;
}

function refreshSelector(event) {
    throwType.innerHTML = currentSelector[Math.floor(Math.random() * currentSelector.length)]
}

