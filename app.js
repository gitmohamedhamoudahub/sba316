const startButton = document.querySelector('.startButton');
const scoreCount = document.querySelector('.scoreCount');
const liveCount = document.querySelector('.liveCount');
let scoreCounter = 0;
let liveCounter = 4;
window.onload = () => {
    document.title = '*** Cards Valley - SBA 316 ***';
    resetGameCounters();
};

const btnPlay =  document.createElement('button');
btnPlay.classList.add('btnNewGame');
btnPlay.textContent = 'Start Game';

startButton.addEventListener('click',
    (event) => {
            resetGameCounters();
            let playerName = prompt('Welcome to Cards Valley! \nPlease Enter Your Name');        
            alert(`Welcome ${playerName}!\nNew Game Just Started\nEnjoy it!`);
    }
);
startButton.appendChild(btnPlay);


function resetGameCounters(){
    scoreCount.innerHTML = 'Score: ' + scoreCounter ;
    liveCount.innerHTML = 'Lives: ' +  liveCounter;

}