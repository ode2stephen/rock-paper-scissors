function player(name) {
    let choice;
    const getChoice = () => choice;
    const makeChoice = (newChoice) => {
        choice = newChoice;
    }
    return { name, getChoice, makeChoice };
}

function computer(name) {
    let choice;
    const getChoice = () => choice;
    const makeChoice = () => {
        choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 2)];
    }
    return { name, getChoice, makeChoice }
}

const logicHander = (() => {
    let user = player("Stephen");
    let comp = computer("Jarvis");

    const checkWin = (user, comp) => {
        if (user === 'scissors' && comp === 'paper') return true;
        if (user === 'paper' && comp === 'rock') return true;
        if (user === 'rock' && comp === 'scissors') return true;
        return false;
    }

    const checkDraw = (user, comp) => {
        return user === comp;
    }

    const play = () => {
        while(true) {
            user.makeChoice(prompt('rock, paper, scissors?'));
            comp.makeChoice();
            console.log(`${user.name} played ${user.getChoice()}`);
            console.log(`${comp.name} played ${comp.getChoice()}`);
            if (checkWin(user.getChoice(), comp.getChoice())) {
                console.log('user won');
                break;
            } else if (checkDraw(comp.getChoice(), user.getChoice())) {
                console.log('draw');
                break;
            } else {
                console.log('user lost');
                break;
            }
        }
    }
    play();

    // return {};
})();
