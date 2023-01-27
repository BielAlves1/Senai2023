
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
                data.innerHTML += pedido.data;
                horario.innerHTML += pedido.hora_pedido;
                btn.id = pedido.id_pedido;

                document.querySelector(".execucao").appendChild(novoPedido);
            } else {
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
                    id.innerHTML += pedido.id_pedido;
                    cliente.innerHTML += pedido.cliente;
                    produto.innerHTML += pedido.produto;
                    endereco.innerHTML += pedido.endereco;
                    data.innerHTML += pedido.data;
                    horario.innerHTML += pedido.hora_pedido;
                    horarioEntrega.innerHTML += pedido.hora_entrega;

                    document.querySelector(".entrega").appendChild(novoPedido);
            }
        })
    })
}