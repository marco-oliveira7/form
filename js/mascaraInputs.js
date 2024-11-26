// Mascara para os inputs CPF, Numero de Telefone, CEP e Data de Nascimento utilizando a biblioteca Cleave.js
var cleave = new Cleave('#inputCPF', {
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2],
    uppercase: true
});

var cleave = new Cleave('#inputTel', {
    delimiters: [' ', '-', '-'],
    blocks: [2, 5, 4],
    uppercase: true
});

var cleave = new Cleave('#inputCEP', {
    delimiters: ['-'],
    blocks: [5, 3],
    uppercase: true
});

var cleave = new Cleave('#inputBirth', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y'],
});
