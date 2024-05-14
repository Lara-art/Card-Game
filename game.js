const emojis = ["🐶", "🐶", "🐸", "🐸", "🐻", "🐻", "🐯","🐯", "🐹", "🐹", "🐮", "🐮", "🦊", "🦊", "🐰", "🐰"];
var asignar_emojis = emojis.sort(() => (Math.random() > .2) ? 1 : -1);
var bocaArriba = [];

function verificarVictoria() {
    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        alert('¡Felicidades! ¡Has ganado el juego!');
    }
}

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div')
    box.className = 'animal';
    box.innerHTML = asignar_emojis[i]

    box.onclick = function () {
        this.classList.add('boxOpen');
        bocaArriba.push(this);
        var audio = document.getElementById("flipcard");
        audio.volume = 0.3;
        audio.play();

        if (bocaArriba.length === 2) {
            setTimeout(function () {
                if (bocaArriba[0].innerHTML === bocaArriba[1].innerHTML) {
                    bocaArriba.forEach(box => box.classList.add('boxMatch'));
                } else {
                    bocaArriba.forEach(box => box.classList.remove('boxOpen'));
                }
                bocaArriba = [];
                verificarVictoria();
            }, 500);
        }
    }

    document.querySelector('.card').appendChild(box);
}
