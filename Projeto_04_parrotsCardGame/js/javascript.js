

let numerosDeCard = prompt(`Digite o numero de cards: 
obs: Entre 4 a 14 e somente numeros pares`)

while (numerosDeCard % 2 !== 0 || numerosDeCard < 4 || numerosDeCard > 14) {
    numerosDeCard = prompt(`Numero ${numerosDeCard} INVALIDO, teste novamente.
    numero de 4 a 14 e somente pares`)
}

let imgArray = [
    { imagem: "./img/bobrossparrot.gif",  status: "em jogo" },
    { imagem: "./img/explodyparrot.gif",  status: "em jogo" },
    { imagem: "./img/fiestaparrot.gif",  status: "em jogo" },
    { imagem: "./img/metalparrot.gif",  status: "em jogo" },
    { imagem: "./img/revertitparrot.gif", status: "em jogo" }, 
    { imagem: "./img/tripletsparrot.gif", status: "em jogo" }, 
    { imagem: "./img/unicornparrot.gif", status: "em jogo" },
    ]
    


    let escolhaArray = [];
    for (let indice = 0; indice < (numerosDeCard / 2); indice++) {
        /*imgArray[indice] = indice*/
        escolhaArray.push(imgArray[indice].imagem)
        escolhaArray.push(imgArray[indice].imagem)
    }
    
    escolhaArray.sort(comparador);
    function comparador() {
        return Math.random() - 0.5;
    }
    



const cardsSelector = document.querySelector("ul")
for (let indice = 0; indice < numerosDeCard; indice++) {
    cardsSelector.innerHTML += /*`
    <li class="card " onclick="virarCard(this)">
        <img src="img/front.png" >
    </li>
    `*/
    `
    <li class="card data-card="${escolhaArray[indice]}" onclick="virarCard(this)">
        <div class="front-face face" >
            <img src="img/front.png" >
        </div>
        <div class="back-face face card${indice}" >
            <img src="${escolhaArray[indice]}" >
        </div>
    </li>
    `
    console.log(escolhaArray[indice])
    ;
}
/*let imgArray = ["./img/bobrossparrot.gif", "./img/explodyparrot.gif", "./img/fiestaparrot.gif", "./img/metalparrot.gif", "./img/revertitparrot.gif", "./img/tripletsparrot.gif", "./img/unicornparrot.gif"]*/

/*function EmbaralharEscolhaArray(escolhaArray) {
    for ( let indice = escolhaArray.length - 1; indice > 0; indice--) {
        const j = Math.floor(Math.random() * (indice + 1));
        [escolhaArray[indice], escolhaArray[j]] = [escolhaArray[j], escolhaArray[indice]] 
    } 
    return escolhaArray; 
}*/

/*function virarCard(elemento) {
    elemento.querySelector(".front-face").classList.add("virada")
    elemento.querySelector(".back-face").classList.add("virada")
    console.log(elemento)
    for (let i = 0; i < numerosDeCard; i++) {
        if (imgArray[i].imagem === elemento.innerHTML){
            imgArray[i].status = "virado";
        }
    }

    /*if (cartaEscolhida !== null) {
        cartaEscolhida.classList.add("front-face")
        cartaEscolhida.classList.remove("back-face")

    }*/
        /*elemento.classList.remove("front-face")*/
        /*elemento.classList.remove("front-face")
        elemento.classList.add("back-face")*//*
    if ( elemento == 2 && escolhaArray !== escolhaArray) {
        elemento.querySelector(".front-face").classList.remove("virada")
        elemento.querySelector(".back-face").classList.remove("virada")
    }

}*/

let primeiroClick;
let segundoClick;
let click = 0;
let par = [];
let cardBloqueado = false;

/*erro principal na linha 118*/
function virarCard(elemento) {
    elemento.querySelector(".front-face").classList.add("virada")
    elemento.querySelector(".back-face").classList.add("virada")
    if (cardBloqueado) {
        resetarCards(cardsIguais);
    }


    if (!primeiroClick) {
        primeiroClick = this;
        return false;
    }
    segundoClick = this;

    compararCards()
    click += 1;
}
function compararCards() {
    let cardsIguais = primeiroClick.dataset.card === segundoClick.dataset.card;
    if (cardsIguais) {
        par.push("deu par")
    }
    console.log(par)


    !cardsIguais ? desabilitarCARDS() : resetarCards(cardsIguais)

    setTimeout(finalizarGame, 1000)

}
function desabilitarCARDS() {
    cardBloqueado = true;
    setTimeout(() => {primeiroClick.classList.remove("virada");
    segundoClick.classList.remove("virada")
    resetarCards()}, 1000);

}

function resetarCards(cardsIguais = false) {
    if(cardsIguais) {
        primeiroClick.removeEventListener("click", virarCard)
        segundoClick.removeEventListener("click", virarCard)
    }
    primeiroClick = null;
    segundoClick = null;
    cardBloqueado= false;

}
function finalizar() {
    if(par.length === quantjogos / 2) {
        alert(`Você ganhou em ${clique} jogadas! Em ${contador} segundos!`)
        setTimeout(resetarGame, 1000)    
    }
}








