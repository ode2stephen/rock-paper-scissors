function player(name) {
    let choice;
    let score = 0;
    const getChoice = () => choice;
    const makeChoice = (newChoice) => {
        choice = newChoice;
    }
    const makeAutoChoice = () => {
        choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    }
    const getScore = () => score;
    const incrScore = () => score++;
    const resetScore = () => score = 0;

    return { name, getChoice, makeChoice, makeAutoChoice, getScore, incrScore, resetScore };
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

    const incrRound = () => round++;
    const getRound = () => round;
    const resetRound = () => round = 0;

    return { user, comp, checkWin, checkDraw, getRound, resetRound, incrRound };
})();

(function main() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const userScoreBox = document.querySelector('.user-score');
    const compScoreBox = document.querySelector('.comp-score');
    const roundBox = document.querySelector('.round-count');
    const result = document.querySelector('.result');
    const restartGameButton = document.querySelector('.restart-game');
    const toggleAutoplayButton = document.querySelector('.toggle-autoplay');
    let isAutoplayOn = false;
    let timer;

    const play = () => {
        result.textContent = `you played ${game.user.getChoice()} and comp played ${game.comp.getChoice()}`;
        if (game.checkWin()) {
            game.user.incrScore();
        } else if (!game.checkDraw()) {
            game.comp.incrScore();
        }
        game.incrRound();

        userScoreBox.textContent = game.user.getScore();
        compScoreBox.textContent = game.comp.getScore();
        roundBox.textContent = game.getRound();
    }

    const manualPlay = (event) => {
        game.user.makeChoice(event.target.className);
        game.comp.makeAutoChoice();
        play();
    }

    const autoPlay = () => {
        game.user.makeAutoChoice();
        game.comp.makeAutoChoice();
        play();
    }

    const restartGame = () => {
        game.user.resetScore();
        game.comp.resetScore();
        game.resetRound();
        userScoreBox.textContent = '0';
        compScoreBox.textContent = '0';
        roundBox.textContent = '0';
    }

    const toggleAutoplay = () => {

        const enableAutoplay = () => {
            rock.removeEventListener('click', play);
            paper.removeEventListener('click', play);
            scissors.removeEventListener('click', play);
            toggleAutoplayButton.classList.add('active');
            isAutoplayOn = true;
            timer = setInterval(autoPlay, 1500);
        }

        const disableAutoplay = () => {
            isAutoplayOn = false;
            clearInterval(timer);
            toggleAutoplayButton.classList.remove('active');
            rock.addEventListener('click', manualPlay);
            paper.addEventListener('click', manualPlay);
            scissors.addEventListener('click', manualPlay);
        }

        isAutoplayOn ? disableAutoplay() : enableAutoplay();
    }

    rock.addEventListener('click', manualPlay);
    paper.addEventListener('click', manualPlay);
    scissors.addEventListener('click', manualPlay);
    restartGameButton.addEventListener('click', restartGame);
    toggleAutoplayButton.addEventListener('click', toggleAutoplay);
})();
