


// Captura os parâmetros da URL
// const urlParams = new URLSearchParams(window.location.search);

// // Mapeia os dados para seus respectivos elementos
// document.addEventListener("DOMContentLoaded", () => {
//     const campos = [
//         { id: "nome", param: "inputName" },
//         { id: "cpf", param: "inputCPF" },
//         { id: "endereco", param: "inputAddress" },
//         { id: "complemento", param: "inputComp" },
//         { id: "codigoArea", param: "inputCod" },
//         { id: "telefone", param: "inputTel" },
//         { id: "genero", param: "inputGen" },
//         { id: "dataNascimento", param: "inputBirth" },
//         { id: "idade", param: "idade" },
//         { id: "escolaridade", param: "inputSchool" },
//         { id: "estado", param: "inputState" },
//         { id: "cep", param: "inputCEP" },
//         { id: "estadoCivil", param: "inputStatus" },
//         { id: "filhos", param: "inputChild" },
//         { id: "trabalho", param: "inputWork" },
//         { id: "rendaMensal", param: "inputGains" },
//         { id: "dinheiroNecessario", param: "inputMoney" },
//         { id: "destinoEmprestimo", param: "inputDestiny" },
//     ];

//     campos.forEach(campo => {
//         const elemento = document.querySelector(`#${campo.id}`);
//         if (elemento && urlParams.has(campo.param)) {
//             // Preenche o campo com o valor da URL
//             elemento.textContent = urlParams.get(campo.param) || 'Não informado';
//         } else if (elemento) {
//             // Caso o parâmetro não exista na URL, coloca 'Não informado'
//             elemento.textContent = 'Não informado';
//         }
//     });
// });




const parametrosDaURL = window.location.href.split('?')[1].split('&');

if (parametrosDaURL) {
    parametrosDaURL.forEach(parametro => {

        const [chave, valor] = parametro.split('=');

        const elemento = document.getElementById(chave);

        if (elemento) {
            elemento.innerText = valor; 
        }
    });
}


