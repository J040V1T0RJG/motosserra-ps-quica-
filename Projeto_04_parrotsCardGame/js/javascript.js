let numerosDeCard = prompt(`Digite o numero de cards: 
obs: Entre 4 a 14 e somente numeros pares`)

while (numerosDeCard % 2 !== 0 || numerosDeCard < 4 || numerosDeCard > 14) {
    numerosDeCard = prompt(`Numero ${numerosDeCard} INVALIDO, teste novamente.
    numero de 4 a 14 e somente pares`)
}
const carta = `        <div class="card">
<img src="img/front.png" >
</div>`


const cardsSelector = document.querySelector(".cards")
for (let indice = 0; indice < numerosDeCard; indice++) {
    cardsSelector.innerHTML += `
    <div class="card" onclick="virarCard(This)">
        <img src="img/front.png" >
    </div>
    `;
}
function virarCard() {
    document.querySelector("img").innerHTML(`src="img/front.png"`)

}

