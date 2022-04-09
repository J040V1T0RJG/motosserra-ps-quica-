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

function virarCard(elemento) {
    const cartaEscolhida = document.querySelector(".card")
    if (cartaEscolhida > 2) {
        cartaEscolhida.classList.remove("teste")
    }
        elemento.classList.toggle("teste")
        

}

