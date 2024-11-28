


// Funcao que verifica se todos os inputs e selects estao preechidos
function LiberaEnter(event) {

    event.preventDefault();

    const inputName = document.getElementById(`inputName`)
    const inputCPF = document.getElementById(`inputCPF`)
    const inputAddress = document.getElementById(`inputAddress`)
    const inputCod = document.getElementById(`inputCod`)
    const inputTel = document.getElementById(`inputTel`)
    const inputCEP = document.getElementById(`inputCEP`)
    const inputGen = document.getElementById('inputGen')
    const inputBirth = document.getElementById('inputBirth')
    const inputState = document.getElementById('inputState')
    const inputSchool = document.getElementById('inputSchool')
    const inputStatus = document.getElementById('inputStatus')
    const inputChild = document.getElementById('inputChild')
    const inputWork = document.getElementById('inputWork')
    const inputGains = document.getElementById('inputGains')
    const inputMoney = document.getElementById('inputMoney')
    const inputDestiny = document.getElementById('inputDestiny')

    if (inputName.value !== "" && inputCPF.value !== "" && inputAddress.value !== ""
        && inputCod.value !== "" && inputTel.value !== "" && inputCEP.value !== ""
        && inputBirth.value !== "" && inputGen.value !== "---" && inputState.value !== "---"
        && inputStatus.value !== "---" && inputChild.value !== "---" && inputWork.value !== "---"
        && inputGains.value !== "---" && inputMoney.value !== "---" && inputDestiny.value !== "---"
        && inputSchool.value !== "---") {
        event.target.submit();
    }

    // Se os inputs e selects nao estiverem preenchidos returna uma mensagem na tela
    else {

        const avisoForm = document.getElementById('avisoForm')

        const timer = setInterval(() => {
            avisoForm.style.display = "flex"
        }, 100)

        setTimeout(() => {
            clearInterval(timer)
            avisoForm.style.display = "none"
        }, 2500)
    }

}

// Funcao que retira a borda vermelha e o asteristico
function LimpaErro(input, span, spanNum) {
    input.style.border = "1px solid #b4babc";
    span[spanNum].style.display = "none";

}

// Verifica se os inputs estao devidamente preenchidos 
function VerificaInputs(inputID, spanNum) {
    let input = document.getElementById(inputID);
    let span = document.getElementsByTagName('span');

    if (input.value === "") {
        input.style.border = "1px solid #9f0103";
        span[spanNum].style.display = "block";
    }

    else {
        LimpaErro(input, span, spanNum)
    }

}

// Confere a data digitada pelo usuario para returna a sua idade
function VerificaData() {

    const inputBirth = document.getElementById('inputBirth')
    const outputIdade = document.getElementById('outputIdade')
    let datasUsuario = inputBirth.value.split('-')

    datasUsuario[0] // dia
    datasUsuario[1] // mes
    datasUsuario[2] // ano

    const date = new Date();
    let mesAtual = date.getMonth(); // returna o mes atual de acordo com a data local

    // verifica se o mes de aniversario ja ocorreu
    if (datasUsuario[1] > mesAtual + 1) {
        outputIdade.value = 2024 - datasUsuario[2] - 1
    }

    else {
        outputIdade.value = 2024 - datasUsuario[2]
    }
    
    // Verifica o ano digitado pelo usuario
    if (datasUsuario[2] > 2024) {
        
        const avisoData = document.getElementById('avisoData')
        
        const interval = setInterval(() => {
            avisoData.style.display = "flex"
        },100)
        
        setTimeout(()=>{
            clearInterval(interval)
            avisoData.style.display = "none"
        },2000)
    }
    
    document.getElementById('hiddenIdade').value = outputIdade.value;
}







