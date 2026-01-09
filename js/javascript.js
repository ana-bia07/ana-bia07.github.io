const carrosel = document.querySelectorAll('.carousel-item');
let iAtual = 0;

function andarCarrosel(iAtual) {
    carrosel.forEach( carrosel => carrosel.classList.remove('active'));
    carrosel[iAtual].classList.add('active');
}

document.querySelector('.carousel-control-next').addEventListener('clink', () => {
    iAtual++;
    if (iAtual >= carrosel.length) iAtual = 0;
    andarCarrosel(iAtual);
})