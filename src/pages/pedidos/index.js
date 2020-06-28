import React ,{useState, useEffect} from 'react';
import Cabecalho from '../../utils/cabecalho';
import { signOutRequest } from '../../store/modules/auth/action';
import api from '../../services/api';
import './styles.css';
import { useDispatch } from 'react-redux';

export default function Pedidos(){
    const [pedidos, setPedidos]= useState([]);
    const [total, setTotal]= useState(0);
    const dispatch = useDispatch();

    useEffect(()=>{
        async function getPedidos(){
            try {
                const response = await api.get('/pedidos/todos');
                setPedidos(response.data);
                
            } catch (error) {
                if(error.response.status == 401){
                    alert('Sessão expirada!');
                    dispatch(signOutRequest());
                }
            }
            
        }

        getPedidos();
    },[]);

    function formataData(data){
        const aux = new Date(data);
        const dia = String(aux.getUTCDate());
        const mes = String(aux.getMonth());
        const ano = String(aux.getUTCFullYear());
        const hora = String(aux.getHours());
        const min = aux.getUTCMinutes();
        return (dia + '/'+mes +'/'+ ano+ ' ' + hora+'h:'+min+'min');
    }
    function formataLista(lista){
        const aux = lista.map(item=>{
            return (String("- "+item+" " ))
        })
        return aux;
    }

    function ListaPedido(props){
        let pizzas = props.pizzas;
        let bebidas = props.bebidas;
        pizzas = pizzas.map((pizza) => 
            <div key={pizza.id}>
                <h2>Sabor: {pizza.sabor}</h2>
                <p>
                    Ingredientes: { formataLista( pizza.ingredientes_padrao)}<br/>
                    Preço: R$ {pizza.preco}<br/>
                    {/* Ingredientes extras: {pizza.ingredientes_extra}  */}
                </p>
            </div>
        );

        bebidas = bebidas.map((bebida)=>(
            <div key={bebida.id}>
                <h2>Sabor: {bebida.nome}</h2>
                <p>
                    Quantidade: {bebida.quantidade}<br/>
                    Preço: R$ {bebida.quantidade * bebida.preco}<br/>
                </p>
            </div>
        ));

        return (
            <div >
                <h1>Pizza(s)</h1>
                {pizzas}
                <h1>Bebida(s)</h1>
                {bebidas}
            </div>
        );
    }


    return(
        <div className="produto">
            <header className="header">
                <Cabecalho/>
            </header>
            <div className="titulopedidos">
                <h1>Todos os pedidos</h1>
            </div>
            <ul className="todosPedidos">
                {
                    pedidos.map(pedido =>(
                    <li key={pedido.id} className="cardPedido">
                        <div >
                            <h1>Pedido {pedido.id}</h1>
                            <h2>Hora do pedido: {formataData(pedido.createdAt)}</h2>
                            <ListaPedido  pizzas={pedido.pizzas} bebidas={ pedido.bebidas}/>
                            <h1>Preço total: R$ {pedido.preco}</h1>

                        </div>
                    </li>
   
                    ))
                }
                
                    {/* <li>
                        <div className="cardPedido">
                            <h1>Pedido 1</h1>
                            <p>
                                Hora do pedido: 21:02<br/>
                                Cliente:moacir<br/>
                                Endereço: rua 123<br/>
                                Pizza de gueiroba<br/>
                                item extra: cebola<br/>
                                1 coca-cola 2L<br/>
                                Preco total: R$ 53,00
                                Hora do pedido: 21:02<br/>
                                Cliente:moacir<br/>
                                Endereço: rua 123<br/>
                                Pizza de gueiroba<br/>
                                item extra: cebola<br/>
                                1 coca-cola 2L<br/>
                                Preco total: R$ 53,00
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="cardPedido">
                            <h1>Pedido 1</h1>
                            <p>
                                Hora do pedido: 21:02<br/>
                                Cliente:moacir<br/>
                                Endereço: rua 123<br/>
                                Pizza de gueiroba<br/>
                                item extra: cebola<br/>
                                1 coca-cola 2L<br/>
                                Preco total: R$ 53,00
                                Hora do pedido: 21:02<br/>
                                Cliente:moacir<br/>
                                Endereço: rua 123<br/>
                                Pizza de gueiroba<br/>
                                item extra: cebola<br/>
                                1 coca-cola 2L<br/>
                                Preco total: R$ 53,00
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="cardPedido">
                            <h1>Pedido 1</h1>
                            <p>
                                Hora do pedido: 21:02<br/>
                                Cliente:moacir<br/>
                                Endereço: rua 123<br/>
                                Pizza de gueiroba<br/>
                                item extra: cebola<br/>
                                1 coca-cola 2L<br/>
                                Preco total: R$ 53,00
                                Hora do pedido: 21:02<br/>
                                Cliente:moacir<br/>
                                Endereço: rua 123<br/>
                                Pizza de gueiroba<br/>
                                item extra: cebola<br/>
                                1 coca-cola 2L<br/>
                                Preco total: R$ 53,00
                            </p>

                        </div>
                    </li> */}
                    
                    
                
            </ul>            
        </div>

    );
}

