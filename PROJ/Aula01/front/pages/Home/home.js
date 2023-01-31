
function loadPedidos(){
    fetch("http://localhost:5000/pedidos/readAll")
    .then((resp) => {return resp.json()})
    .then((data)=> {
        data.forEach(pedido => {
            if(pedido.hora_entrega == "00:00:00"){
                let itemPedido = document.querySelector(".pedidoExec");
                let novoPedido = itemPedido.cloneNode(true);
                novoPedido.classList.remove("model");

                let id = novoPedido.querySelector("#id");
                let cliente = novoPedido.querySelector("#cliente");
                let produto = novoPedido.querySelector("#produto");
                let endereco = novoPedido.querySelector("#endereco");
                let data = novoPedido.querySelector("#data");
                let horario = novoPedido.querySelector("#horaPedido");
                let btn = novoPedido.querySelector("button");
                id.innerHTML += pedido.id_pedido;
                cliente.innerHTML += pedido.cliente;
                produto.innerHTML += pedido.produto;
                endereco.innerHTML += pedido.endereco;
                data.innerHTML += pedido.data != null ? pedido.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0] : pedido.data;
                horario.innerHTML += pedido.hora_pedido;
                btn.id = pedido.id_pedido;

                document.querySelector(".execucao").appendChild(novoPedido);
            } else if(pedido.hora_entrega != "00:00:00" && pedido.hora_fim == "00:00:00") {
                    let itemPedido = document.querySelector(".pedidoEntrega");
                    let novoPedido = itemPedido.cloneNode(true);
                    novoPedido.classList.remove("model");

                    let id = novoPedido.querySelector("#id");
                    let cliente = novoPedido.querySelector("#cliente");
                    let produto = novoPedido.querySelector("#produto");
                    let endereco = novoPedido.querySelector("#endereco");
                    let data = novoPedido.querySelector("#data");
                    let horario = novoPedido.querySelector("#horaPedido");
                    let horarioEntrega = novoPedido.querySelector("#horaEntrega");
                    let btn = novoPedido.querySelector("button");
                    id.innerHTML += pedido.id_pedido;
                    cliente.innerHTML += pedido.cliente;
                    produto.innerHTML += pedido.produto;
                    endereco.innerHTML += pedido.endereco;
                    data.innerHTML += pedido.data != null ? pedido.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0] : pedido.data;
                    horario.innerHTML += pedido.hora_pedido;
                    horarioEntrega.innerHTML += pedido.hora_entrega;
                    btn.id = pedido.id_pedido;
                    

                    document.querySelector(".entrega").appendChild(novoPedido);
            }
        })
    })
}

function criarPedido(){
    let cliente = document.querySelector("#cliente").value;
    let endereco = document.querySelector("#endereco").value;
    let produto = document.querySelector("#produto").value;
    let idEntregador = Math.floor(Math.random() * 4 + 1);

    let pedido = {
        "cliente":cliente,
        "endereco":endereco,
        "produto":produto,
        "id_entregador":idEntregador
    }

    fetch("http://localhost:5000/pedidos/create", {
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(pedido)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data != undefined){
            alert("Pedido Recebido com Sucesso!");
            window.location.reload();
        } else {
            alert("Erro no Sistema!")
        }
    })
}

function enviarEntrega(e){

    let pedido = {
        "hora_entrega": new Date().toLocaleTimeString(),
        "id_pedido": e.id
    };

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(pedido)
      };
      
      fetch('http://localhost:5000/pedidos/update/entrega', options)
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .catch(err => console.error(err));

      alert('Pedido Enviado com Sucesso!');
      window.location.reload();
}

function finalizarEntrega(e){

    let pedido = {
        "hora_fim": new Date().toLocaleTimeString(),
        "id_pedido": e.id
    };

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(pedido)
      };
      
      fetch('http://localhost:5000/pedidos/update/fim', options)
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .catch(err => console.error(err));

      alert('Pedido Entregue com Sucesso!');
      window.location.reload();
}