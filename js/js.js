const meuCarrossel = document.getElementById('carouselExampleIndicators');
const todosCards = document.querySelectorAll('.card-projects');

meuCarrossel.addEventListener('slide.bs.carousel', function (event) {
    const nextIndex = event.to;
    console.log(nextIndex)
    todosCards.forEach(card => {
        card.classList.add('hiden');
    });
    const cardAtivo = document.getElementById('p-' + nextIndex);
    console.log(cardAtivo)
    if (cardAtivo){
        cardAtivo.classList.remove('hiden');
    }
});