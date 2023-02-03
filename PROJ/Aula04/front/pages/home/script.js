
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