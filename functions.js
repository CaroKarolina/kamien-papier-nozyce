function createPcMove(){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) return 'kamień';
    else if (randomNumber === 2) return 'nożyce';
    else return 'papier'
}

function finallyResult(plrMove, pcMove) {
    const plrMoveDiv = document.querySelector('#plr-move');
    const pcMoveDiv = document.querySelector('#pc-move');

    plrMoveDiv.innerHTML = plrMove;
    pcMoveDiv.innerHTML = pcMove;
}

function winnerTable(plrMove, pcMove) {
    console.log(plrMove)
    const resultDiv = document.querySelector('#result')

    if (plrMove === pcMove) resultDiv.innerHTML = 'Remis';
    else if (
        (plrMove === 'kamień' && pcMove === 'nożyce') ||
        (plrMove === 'papier' && pcMove === 'kamień') ||
        (plrMove === 'nożyce' && pcMove === 'papier')
    ) resultDiv.innerHTML = 'Świetnie!';  
    else resultDiv.innerHTML = 'Następnym razem będzie lepiej :)'
}