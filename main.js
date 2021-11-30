function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) { score++; }
    if (document.getElementById('correct2').checked) { score++; }
    if (document.getElementById('correct3').checked) { score++; }
    if (document.getElementById('correct4').checked) { score++; }
    if (document.getElementById('correct5').checked) { score++; }
    if (document.getElementById('correct6').checked) { score++; }
    if (document.getElementById('correct7').checked) { score++; }
    if (document.getElementById('correct8').checked) { score++; }
    var scoreElement = document.getElementById('score');
    console.log(document.getElementById('score'))
    scoreElement.innerHTML = 'Seu score foi ' + score;
}

