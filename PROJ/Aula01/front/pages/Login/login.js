function login() {
    let credenciais = {
        "email": document.querySelector(".email").value,
        "senha": document.querySelector(".senha").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    options.body = JSON.stringify(credenciais);
    fetch("http://localhost:5000/entregadores/login", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {
                localStorage.setItem("info", JSON.stringify(
                    {
                        "id_entregador": resp.id_user, 
                        "nome": resp.id_role,
                        "email":resp.nome_user, 
                        "veiculo":resp.email, 
                        "token":resp.token
                    }
                    ));
                window.location.href = "../Home/home.html";
            }
            else {
                alert("Credenciais inválidas!")
            }
        })
};