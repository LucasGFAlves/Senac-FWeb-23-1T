function validaBusca() {
    if (document.querySelector('#q').value == '') {
        document.querySelector('#form-busca').style.background = 'red';
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}

function buscavalidada() {
    document.querySelector('#form-busca').style.background = 'gray';
}

document.querySelector('#q').onfocus = buscavalidada;


// fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["./img/logo.png", "./img/carrinho.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}



var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    }

    return false;
};