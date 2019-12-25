$('body').css({
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'height': '98vh',
    'background-image': 'url(img/back.jpg)'
})

$('#glavny').css({
    'display': 'block',
    'width': '343px',
    'height': '563px',
})

$('#slider').css({
    'width': '343px',
    'height': '343px',
})

$('#buttons').css({
    'width': '240px',
    'height': '60px',
    'background': 'none',
    'margin-top': '60px',
    'margin-left': 'auto',
    'margin-right': 'auto',
})

$('#leftButton').css({
    'float': 'left',
    'width': '80px',
    'height': '40px',
})

$('#rightButton').css({
    'float': 'right',
    'width': '80px',
    'height': '40px',
})

let stock = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png',
    'img/8.png',
];

let rootElem = $('#slider');
let mainElem = $('<div></div>');
mainElem.addClass('main');
rootElem.append(mainElem);
let slideContainer = $('<div></div>');
slideContainer.attr('id', 'slideContainer');


let l = stock.length - 1;
let c = 0;
let r = 1;

triada();

function triada() {

    let slideElemLeft = $('<div></div>');
    slideElemLeft.attr('id', `${l}`);
    slideElemLeft.css('background-image', `url('${stock[l]}')`);
    slideContainer.append(slideElemLeft);

    let slideElemCenter = $('<div></div>');
    slideElemCenter.attr('id', `${c}`);
    slideElemCenter.css('background-image', `url('${stock[c]}')`);
    slideContainer.append(slideElemCenter);

    let slideElemRight = $('<div></div>');
    slideElemRight.attr('id', `${r}`);
    slideElemRight.css('background-image', `url('${stock[r]}')`);
    slideContainer.append(slideElemRight);

    slideContainer.css('left', '-343px');
    mainElem.append(slideContainer);
}

let handbreak = false;

$('#leftButton').click(function() {
    if (handbreak == true) { return };
    handbreak = true,
        $('#slideContainer').animate({ left: '0' }, 500, goLeft); 
})


$('#rightButton').click(function() {
    if (handbreak == true) { return };
    handbreak = true,
        $('#slideContainer').animate({ left: '-686px' }, 500, goRight);
})

function goLeft() {
    if (c == 0) {
        l = stock.length - 2;
        c = stock.length - 1;
        r = 0;
    } else if (c == stock.length - 1) {
        l = stock.length - 3;
        c = stock.length - 2;
        r = stock.length - 1;
    } else if (c == 1) {
        l = stock.length - 1;
        c = 0;
        r = 1;
    } else {
        c = c - 1;
        l = c - 1;
        r = c + 1;
    }
    slideContainer.html("");
    triada();
    handbreak = false
}

function goRight() {
    if (c == stock.length - 2) {
        l = stock.length - 2;
        c = stock.length - 1;
        r = 0;
    } else if (c == stock.length - 1) {
        l = stock.length - 1;
        c = 0;
        r = 1;
    } else {
        c = c + 1;
        l = c - 1;
        r = c + 1;
    }
    slideContainer.html("");
    triada();
    handbreak = false
}