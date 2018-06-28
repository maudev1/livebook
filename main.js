function enviarDados(){
                
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var sex = document.getElementById("sex").value;
    var password = document.getElementById("password").value;
    
    if(name.length < 3 || name.length > 30)
        alert('Nome invalido!');
    else{
        if(lastName.length < 3 || lastName.length > 50)
            alert('sobrenome invalido');
        
       else{
            if(email.lenght < 3)//criar uma forma de verificaçao pelo caractere @
              alert('email invalido');
            
            else{
                if(password.length < 1 || password.length > 64)
                 alert('Senha precisa ter no minimo 8 caracteres e no maximo 64 caracteres');
                else
                 alert('Bem vindo Sr ' + name + ' seu cadastro esta concluido!')
                }
        }
            }      
                        }

function login(){

    var login = document.getElementById("email").value;   
    log = 3

    for (var i = 0; 1 < login.length; i += 1){
        var log = users[1];
        result.push()
    }

}
