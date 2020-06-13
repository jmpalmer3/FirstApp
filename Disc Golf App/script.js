var throws = ['Backhand','Forehand','Scoober','Hammer','Thumber','Lefty Forehand','Lefty Backhand','360','Standstill','Jump Putt'];
var discs = ['Putter','Mid-Range','Fairway Driver','Distance Driver'];
var currentSelector = throws;
var throwActive = true;

//SELECTORS
const throwButton = document.querySelector('#throw-button');
const discButton = document.querySelector('#disc-button');
const refreshButton = document.querySelector('.refresh-circle');
const throwType = document.querySelector('.throw-type');
const settingsButton = document.querySelector('.settings');
const homeContainer = document.querySelector('.home-container');
const settingsContainer = document.querySelector('.settings-container');
const returnArrow = document.querySelector('#return-arrow');
const checkBox = document.querySelectorAll('.check-box')
const throwSettings = document.querySelector('.throw-settings');
const discSettings = document.querySelector('.disc-settings');

//EVENT LISTENERS

throwButton.addEventListener('click',changeSelectorToThrow);
discButton.addEventListener('click',changeSelectorToDisc);
refreshButton.addEventListener('click',refreshSelector);
settingsButton.addEventListener('click',changeScreen);
returnArrow.addEventListener('click',changeScreen);

//FUNCTIONS


//Navbar selectors
function changeSelectorToThrow(event) {
    //Checks if current selector is not matching
   if(currentSelector!=throws) {
        //Changes current selector to selected
        currentSelector = throws;
        //Removes content from middle of screen
        throwType.innerHTML = "";
        //Changes button look
        throwButton.classList.remove('not-active');
        discButton.classList.add('not-active');
        //Changes settings page
        throwSettings.classList.remove('hidden')
        discSettings.classList.add('hidden')
        throwActive = true;
   }
}
function changeSelectorToDisc(event) {
    if(currentSelector!=discs) {
        currentSelector = discs;
        throwType.innerHTML = "";
        discButton.classList.remove('not-active');
        throwButton.classList.add('not-active');
        throwSettings.classList.add('hidden')
        discSettings.classList.remove('hidden')
        throwActive = false;
    }
}

//Random throw select
function refreshSelector(event) {
    throwType.innerHTML = ""
    setTimeout(function() {
        if(currentSelector.length!=0){
            throwType.innerHTML = currentSelector[Math.floor(Math.random() * currentSelector.length)]
        }
    }, 250);
}
//Changes screen between settings and home
function changeScreen(event) {
    homeContainer.classList.toggle('hidden')
    settingsContainer.classList.toggle('hidden')
}

//Function to change check box, for ecah button, add event listener, function checks for which to change to
checkBox.forEach(checkBoxChange => {
    checkBoxChange.addEventListener("click", () => {
        var test = checkBoxChange.parentElement.innerHTML.split(">")
        if(checkBoxChange.src.endsWith('check_box.png')) {
            checkBoxChange.src = 'checked_box.png'
            if(throwActive) {
                throws.push(test[1])
            } else {
                discs.push(test[1])
            }
        } else {
            checkBoxChange.src = 'check_box.png'
            if(throwActive) {
                throws.splice(throws.indexOf(test[1]),1)
            } else {
                discs.splice(discs.indexOf(test[1]),1)
            }  
        }
    })
})









// throwButton.forEach(throwButtonChange => {
//     throwButtonChange.addEventListener('click', () => {
//         if(currentSelector!=throws) {
//             currentSelector = throws;
//             throwType.innerHTML = "";
//             throwButtonChange.classList.remove('not-active');
//             discButton.classList.add('not-active');
//             throwSettings.classList.add('hidden')
//             discSettings.classList.remove('hidden')
//         }
//     })
// })

// discButton.forEach(discButtonChange => {
//     discButtonChange.addEventListener('click', () => {
//         if(currentSelector!=discs) {
//             currentSelector = discs;
//             throwType.innerHTML = "";
//             discButtonChange.classList.remove('not-active');
//             throwButton.classList.add('not-active');
//             throwSettings.classList.remove('hidden')
//             discSettings.classList.add('hidden')
            
//         }
//     })
// })

