let numerosDeCard = prompt(`Digite o numero de cards: 
obs: Entre 4 a 14 e somente numeros pares`)

while (numerosDeCard % 2 !== 0 || numerosDeCard < 4 || numerosDeCard > 14) {
    numerosDeCard = prompt(`Numero ${numerosDeCard} INVALIDO, teste novamente.
    numero de 4 a 14 e somente pares`)
}

const cardsSelector = document.querySelector("ul")
for (let indice = 0; indice < numerosDeCard; indice++) {
    cardsSelector.innerHTML += `
    <li class="card" onclick="virarCard(this)">
        <img src="img/front.png" >
    </li>
    `;
}
/*let imgArray = ["./img/bobrossparrot.gif", "./img/explodyparrot.gif", "./img/fiestaparrot.gif", "./img/metalparrot.gif", "./img/revertitparrot.gif", "./img/tripletsparrot.gif", "./img/unicornparrot.gif"]*/

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
    imgArray[indice] = indice
    escolhaArray.push(imgArray[indice])
    escolhaArray.push(imgArray[indice])
}

escolhaArray.sort(comparador);
function comparador() {
    return Math.random() - 0.5;
}

/*function EmbaralharEscolhaArray(escolhaArray) {
    for ( let indice = escolhaArray.length - 1; indice > 0; indice--) {
        const j = Math.floor(Math.random() * (indice + 1));
        [escolhaArray[indice], escolhaArray[j]] = [escolhaArray[j], escolhaArray[indice]] 
    } 
    return escolhaArray; 
}*/



function virarCard(elemento) {
    const cartaEscolhida = document.querySelector(".card")
    if (cartaEscolhida > 2) {
        cartaEscolhida.classList.remove("teste")
    }
        elemento.classList.toggle("teste")
        

}

