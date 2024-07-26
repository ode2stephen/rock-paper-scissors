function player(name) {
    let choice;
    let score = 0;
    const getChoice = () => choice;
    const makeUserChoice = (newChoice) => {
        choice = newChoice;
    }
    const makeCompChoice = () => {
        choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 2)];
    }
    const getScore = () => score;
    const incrScore = () => score++;
    const resetScore = () => score = 0;

    const makeChoice = name === "user" ? makeUserChoice : makeCompChoice;

    return { name, getChoice, makeChoice, getScore, incrScore, resetScore };
}

const game = (() => {
    let user = player("user");
    let comp = player("comp");
    let round = 0;

    const checkWin = () => {
        if (user.getChoice() === 'scissors' && comp.getChoice() === 'paper') return true;
        if (user.getChoice() === 'paper' && comp.getChoice() === 'rock') return true;
        if (user.getChoice() === 'rock' && comp.getChoice() === 'scissors') return true;
        return false;
    }

    const checkDraw = () => {
        return user.getChoice() === comp.getChoice();
    }

    const resetScores = () => { }

    const incrRound = () => round++;
    const getRound = () => round;
    const resetRound = () => round = 0;

    return { user, comp, checkWin, checkDraw, getRound, resetRound, incrRound };
})();

(function ui() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const userScoreBox = document.querySelector('.user-score');
    const compScoreBox = document.querySelector('.comp-score');
    const roundBox = document.querySelector('.round-count');
    const result = document.querySelector('.result');

    const play = (event) => {
        game.user.makeChoice(event.target.className);
        game.comp.makeChoice();
        result.textContent = `you played ${game.user.getChoice()} and comp played ${game.comp.getChoice()}`;
        if (game.checkWin()) {
            game.user.incrScore();
        } else if (game.checkDraw()) {
        } else {
            console.log('user lost');
            game.comp.incrScore();
        }
        game.incrRound();

        userScoreBox.textContent = game.user.getScore();
        compScoreBox.textContent = game.comp.getScore();
        roundBox.textContent = game.getRound();
    }

    rock.addEventListener('click', play);
    paper.addEventListener('click', play);
    scissors.addEventListener('click', play);
})();
