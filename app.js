const startButton = document.querySelector('.startButton');
const scoreCount = document.querySelector('.scoreCount');
const liveCount = document.querySelector('.liveCount');
let scoreCounter = 0;
let liveCounter = 4;
window.onload = () => {
    document.title = '*** SBA 316 ***';
    resetGameCounters();
};

const btnPlay =  document.createElement('button');
btnPlay.textContent = 'Start Game';

startButton.addEventListener('click',
    (event) => {
            resetGameCounters();        
    }
);
startButton.appendChild(btnPlay);


function resetGameCounters(){

    scoreCount.innerHTML = 'Score: ' + scoreCounter ;
    liveCount.innerHTML = 'Lives: ' +  liveCounter;


}