var setaDireita = window.document.getElementById("seta-direita")
var card1 = window.document.getElementById("card1")
var card2 = window.document.getElementById("card2")
var card3 = window.document.getElementById("card3")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    card1.style = "display:none"
    card3.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    card1.style = "display:flex"
    card3.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}