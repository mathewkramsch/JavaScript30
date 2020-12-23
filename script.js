// script.js

const randomAdLib = ()=>{
    const adLibs = ['brrrrr', 'yuh', 'yeet', 'okay', 'skirt', 'its lit', 'gratataa', 'igh', 'bow'];
    const choice = Math.round(Math.random()*(adLibs.length-1));
    return adLibs[choice];
}

const showWord = ()=>{
    const p = document.querySelector('p');
    p.textContent = randomAdLib();
}

const playSound = (keyCodeNum)=>{
    const audio = document.querySelector(`audio[data-key='${keyCodeNum}']`);
    const keyButton = document.querySelector(`.key[data-key='${keyCodeNum}']`);
    if (!audio) return;

    audio.currentTime=0;  // re-loads audio to play from beginning
    audio.play();
    keyButton.classList.toggle('playing');
    showWord();
}

function removePlayIndication(e) {  // use function declaration so this refers to object called
    if (e.propertyName=='transform') {
        this.classList.remove('playing');
        document.querySelector('p').textContent = '';
    }
}

window.addEventListener('keydown', (keyEvent)=>{
    playSound(keyEvent.keyCode);
});

const keys = document.querySelectorAll('.key');
keys.forEach( keyButton => {
    keyButton.addEventListener('click', ()=>{
        playSound(keyButton.getAttribute('data-key'));
    });
    keyButton.addEventListener('transitionend', removePlayIndication);
});
