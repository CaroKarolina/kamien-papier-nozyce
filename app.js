const btnRock = document.querySelector('#kamień');
const btnScissor = document.querySelector('#nożyce');
const btnPaper = document.querySelector('#papier');

btnRock.addEventListener('click', function() {
    startGame(this.id)
});

btnScissor.addEventListener('click', function() {
    startGame(this.id)
});

btnPaper.addEventListener('click', function() {
    startGame(this.id)
});

function startGame (plrMove) {
    const pcMove = createPcMove();
    finallyResult(plrMove, pcMove);
    winnerTable(plrMove, pcMove);
}
