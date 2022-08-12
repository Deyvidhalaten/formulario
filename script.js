
// Seletores
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const confSenha = document.querySelector('#confirma_senha');

const inputNome = document.querySelector('#nome')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const inputconfSenha = document.querySelector('#confirma_senha')

const button = document.querySelector('#enviar');
const label = document.querySelector('.input');
const container = document.querySelector('.container');
const redModeClass = 'red-mode';
const greenModeClass = 'green-mode';

// Eventos
button.addEventListener('click', changeMode);

// Funções
function changeMode(){
    if(verificaNome()){
        if(verificaEmail()){
            if(verificaSenha()){
                console.log('Cadastrado com sucesso');
                console.log('Nome: ' + nome.value + ' - Email: ' + email.value);
            }
        }
    }else{
        verificaNome();
        verificaEmail();
        verificaSenha();
        console.log('falta Informações');
    }
  
}


function verificaNome(){
    if(!nome.value){
        inputNome.classList.remove(greenModeClass);
        inputNome.classList.add(redModeClass);
    }else{
        inputNome.classList.add(greenModeClass);
        return true;
    }
}

function verificaEmail(){

    const validateEmail = (email) => {
        const re = /\S+@\S+\./;
        return re.test(email);
      };
   

      console.log(validateEmail());
      if(validateEmail.value){
        console.log('true')
      }else{
        console.log('false')
      }

    if(!email.value){
        inputEmail.classList.remove(greenModeClass);
        inputEmail.classList.add(redModeClass);
    }else{
        inputEmail.classList.add(greenModeClass);
        return true;
    }
}

function verificaSenha(){
    if(!senha.value){
        inputSenha.classList.remove(greenModeClass);
        inputconfSenha.classList.add(redModeClass);
        inputSenha.classList.add(redModeClass);
    }else{
        inputSenha.classList.add(greenModeClass);
    }

    if(confSenha.value != senha.value){
        console.log('Confirmação de senha Incorreta')
        inputconfSenha.classList.remove(greenModeClass);
        inputconfSenha.classList.add(redModeClass);

    }else{
        if(!confSenha.value){
            console.log('Confirmação de senha Incorreta');
            inputconfSenha.classList.remove(greenModeClass);
            inputconfSenha.classList.add(redModeClass);
        }else{
            console.log('Senha Correta')
            inputconfSenha.classList.add(greenModeClass);
            return true;
        }
       
    }
}





