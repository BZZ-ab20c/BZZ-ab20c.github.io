function toggleAnswer(id, buttonElementId) {
    const ANSWER = document.getElementById(id);

    if (ANSWER.style.display === 'none'){
        ANSWER.style.display = null;
    }else{
        ANSWER.style.display = 'none';
    }

    toggleIcon(buttonElementId);
}

function toggleIcon(buttonId){
    const BUTTON_IMG = document.getElementById(buttonId).children[0];

    if (BUTTON_IMG.src.includes('_off')){
        BUTTON_IMG.src = BUTTON_IMG.src.replace('_off','');
    }else {
        BUTTON_IMG.src = BUTTON_IMG.src.replace('.svg','_off.svg');
    }
}