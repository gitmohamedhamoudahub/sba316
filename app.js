const startButton = document.querySelector('.startButton');
const scoreCount = document.querySelector('.scoreCount');
const liveCount = document.querySelector('.liveCount');
const allCards = document.querySelector('.allCards');
const gameBoard = document.querySelector('.gameBoard');

const btnPlay =  document.createElement('button');

let scoreCounter = 0;
let liveCounter = 4;
let gameLevel = 4;
let allGameCards = [1,2,3,4,5,6,7,8,9,10];
//Loading Page and initialization
window.onload = () => {
    document.title = '*** Cards Valley - SBA 316 ***';
    resetGameCounters();
    getAllCards();
};

btnPlay.classList.add('btnNewGame');
btnPlay.textContent = 'Start Game';
startButton.appendChild(btnPlay);
//starting game event for start button
startButton.addEventListener('click',
    (event) => {
            resetGameCounters();
            let playerName = prompt('Welcome to Cards Valley! \nPlease Enter Your Name');        
            // alert(`Welcome ${playerName}!\nNew Game Just Started\nEnjoy it!`);
            alert(
                `Welcome ${playerName}!
                New Game Just Started
                Enjoy it!`); 
                            // Enter Number of cards between 4 and 10`);        
            showGameLevelSelection();
    }
);


//reset all game counters
function resetGameCounters(){
    scoreCount.innerHTML = 'Score: ' + scoreCounter ;
    liveCount.innerHTML = 'Lives: ' +  liveCounter;

}

function getAllCards(){
allGameCards.forEach((element)=> {
    // alert(element);

    //Dynamic Cards Construction
    const flashCardContainer =  document.createElement('div');
    flashCardContainer.classList.add('flashCardContainer');

    const cardContainer =  document.createElement('div');
    cardContainer.classList.add('cardContainer');

    const cardFrontSide =  document.createElement('div');
    cardFrontSide.classList.add('cardFrontSide');
    
    const cardBackSide =  document.createElement('div');
    cardBackSide.classList.add('cardBackSide');
    cardBackSide.innerHTML =`<h2>${element}</h2>`
    
    
    //adding cards to interface
    cardContainer.appendChild(cardBackSide);
    cardContainer.appendChild(cardFrontSide);
    flashCardContainer.appendChild(cardContainer);   
    allCards.appendChild(flashCardContainer);
    gameBoard.appendChild(allCards);

    // cardContainer.appendChild(cardBackSide);
    // h1Flip.appendChild(randomFlashCardContainer);
    
})

//Random Card Construction
    const randomCard =   document.createElement('div');
    randomCard.classList.add('randomCard');

    const randomFlashCardContainer = document.createElement('div');
    randomFlashCardContainer.classList.add('randomFlashCardContainer');

    const h1Flip = document.createElement('div');
    h1Flip.classList.add('h1Flip');
    h1Flip.innerHTML = '<h1>12</h1>';
    
    randomFlashCardContainer.appendChild(h1Flip);
    randomCard.appendChild(randomFlashCardContainer);
    gameBoard.appendChild(randomCard);
}

//game level display
function showGameLevelSelection() {
    document.getElementById("gameLevelsSelection").style.display = "block";
  }

  function handleGameLevel() {
    
    // if(! document.querySelector('input[name="option"]:checked').value) alert('xx');
    const selectedLevel = document.querySelector('input[name="option"]:checked').value ;
    
    console.log("Selected Level:" + selectedLevel);
    alert("Selected Level:" + selectedLevel);
    // gameLevel = selectedLevel;
    var ele = document.getElementsByName("option");
    for(var i=0;i<ele.length;i++)
        {
            if(ele[i].value == 4)
                ele[i].checked = true;
            else
                ele[i].checked = false;}
    // // document.querySelector('input[name="option"]:checked');
    document.querySelector('input[name="option"]:checked').value = 4;
    document.getElementById("gameLevelsSelection").style.display = "none";
  }