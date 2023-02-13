
function loadSetor() {
    fetch("http://localhost:5000/setores/readAll")
        .then((resp) => { return resp.json() })
        .then((data) => {
            data.forEach(setor => {
                let itemSetor = document.querySelector(".card-setor");
                let novoSetor = itemSetor.cloneNode(true);
                novoSetor.classList.remove("model");

                let nome = novoSetor.querySelector("#nome");
                let comissao = novoSetor.querySelector("#comissao");
                nome.innerHTML += setor.nome;
                comissao.innerHTML += (setor.comissao * 100)+'%';

                document.querySelector(".container").appendChild(novoSetor);
            })
        })
}

function criarSetor(){
    let nome = document.querySelector("#nome").value;
    let comissao = document.querySelector("#comissao").value;

    let setor = {
        "nome":nome,
        "comissao":comissao
    }

    fetch("http://localhost:5000/setores/create", {
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(setor)
    })
    .then(res => res.json())
    .then(data => {
        if(data != undefined){
            alert("Setor cadastrado com Sucesso!");
            window.location.reload();
        } else {
            alert("Erro no Sistema!")
        }
    })
}