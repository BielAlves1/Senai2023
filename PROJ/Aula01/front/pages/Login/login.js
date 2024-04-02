const { stringify } = require("querystring");

function login() {
    let credenciais = {
        "email": document.querySelector(".email").value,
        "senha": document.querySelector(".senha").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({credenciais})
    };
    
    fetch("http://localhost:5000/entregadores/login", options)
        .then(resp => {return resp.json()})
        .then(data => {
            if (data.erro === undefined) {
                localStorage.setItem("info", JSON.stringify(
                    {
                        "id_entregador": data.id_user, 
                        "nome": data.id_role,
                        "email":data.nome_user, 
                        "veiculo":data.email, 
                        "token":data.token
                    }
                    ));
                window.location.href = "../Home/home.html";
            }
            else {
                alert("Credenciais inválidas!")
            }
        })
};