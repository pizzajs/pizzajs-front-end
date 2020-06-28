import React, {useEffect, useState }from 'react';
import Cabecalho from '../../utils/cabecalho';
import './style.css';
import { useDispatch } from 'react-redux';
import { AdicionarPizzaCustomizada } from '../../store/modules/pedido/action';
import api from '../../services/api';
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import { signOutRequest } from '../../store/modules/auth/action';


export default function Pizza (){
    const [bordaSelecionada, setBordaSelecionada] = useState([]);
    const [auxMassa, setAuxMassa] = useState(0);
    const [auxBorda, setAuxBorda] = useState(0);
    const [auxRecheio, setAuxRecheio] = useState(0);
    const [massaSelecionada, setMassaSelecionada] = useState([]);
    const [recheioSelecionado, setRecheioSelecionado] = useState([]);
    const [massas, setMassas] = useState([]);
    const [bordas, setBordas] = useState([]);
    const [recheios, setRecheios] = useState([]);
    const [quantidade, setQuantidade] = useState({});
    const [total, setTotal] = useState(0);
    const [nomePizza, setPizzaNome] = useState("");

    const dispatch = useDispatch();

    useEffect(()=>{
        async function getIngredientes(){
            try {
                const response = await api.get('/ingredientes');
                let aux = [];
                
                aux = response.data.filter(item => item.tipo === 'M');
                setMassas( aux);

                aux = response.data.filter(item => item.tipo === 'B');
                setBordas(aux);

                aux = response.data.filter(item => item.tipo === 'R');
                setRecheios(aux);
            

                let qtd ={}
                aux.map(recheio =>{
            
                    qtd[recheio.id] ={sabor: recheio.nome , quantidade: 0}
                })
                setQuantidade(qtd);
                
            } catch (error) {
                if(error.response.status == 401){
                    alert('Sessão expirada!');
                    dispatch(signOutRequest());
                }
                
            }
            
        }

        getIngredientes();
        
    },[])

    function selectMassa(event){
        const massaInfo = event.target.value.split(',');
        if(massaInfo[0] !== "-1"){
            setAuxMassa(Number(massaInfo[1]));
            setMassaSelecionada([String(massaInfo[0]), massaInfo[2]]);
            setTotal(Number(massaInfo[1])+ auxBorda + auxRecheio );
        }
        
    }
    function selectBorda(event){
        const bordaInfo = event.target.value.split(',');
        console.log(bordaInfo)
        if(bordaInfo[0] !== "-1"){
            setAuxBorda(Number(bordaInfo[1]))
            setBordaSelecionada([String(bordaInfo[0]), bordaInfo[2]]);
            setTotal(Number(bordaInfo[1]) + auxMassa + auxRecheio );
        }
        
    }
    
    function adicionarRecheio(id, preco){

        let cont = {};
        cont = quantidade;
        cont[id].quantidade += 1;
        setQuantidade(cont);
        setRecheioSelecionado([...recheioSelecionado, id]);
        setTotal(total + preco);
            
    }
    
    function decrementarRecheio(id, preco){

        if(quantidade[id].quantidade ==0){
            setTotal(total);
        }
        else{
            const recheiosids = recheioSelecionado;
            recheiosids.splice(recheiosids.indexOf(id),1);
            setRecheioSelecionado(recheiosids);

            let cont = {};
            cont = quantidade;
            cont[id].quantidade -= 1;
            setTotal(total- preco);

            setQuantidade(cont);

        }
                
    }

    function Quantidade({id,preco}){
        if(Object.keys(quantidade).length !== 0){
            return(
                <div className="botoesRecheio">
                    <FiMinusSquare className='butaoRecheio' size={25} onClick={()=>decrementarRecheio(id, preco)}/>
                    <h4>{quantidade[id].quantidade}</h4>

                    <FiPlusSquare className='butaoRecheio' size={25} color="#red" onClick={()=>adicionarRecheio(id, preco)}/>
                </div>
            );
        }
        else{
            return (<></>);
        }
        
       
    }
    function pizzaNome(event){
        
        setPizzaNome(event.target.value);
    }

    function adicionarMinhaPizza(){
        
        if(!nomePizza  || !massaSelecionada || !bordaSelecionada || recheioSelecionado.length === 0){
            alert("Preencha e selecione as opções!");
            return
        }
        let pizzaInfo = {};
        recheioSelecionado.map(rec =>{
            pizzaInfo[rec] = quantidade[rec]
        })
        
        const ingredientesInformacoes = 
            {
                nome: nomePizza, ids:[Number(massaSelecionada[0]), Number(bordaSelecionada[0]),...recheioSelecionado], 
                massa: massaSelecionada[1],
                borda: bordaSelecionada[1], 
                recheio: pizzaInfo, 
                preco: total
            };
            
        dispatch( AdicionarPizzaCustomizada(ingredientesInformacoes));
        alert("Pizza criada com sucesso!");
    }

    return(
        <div className="produto">
            <header className="header">
                <Cabecalho/>
            </header>
            <div className="info">
                <div className="esquerda">
                    <h2>Nome da pizza</h2>
                    <input className="massa"  type="text" maxLength="20" placeholder="Digite aqui.." onChange={pizzaNome}/>

                    <h2>Massas</h2>
                    <select className="massa"  onChange = {selectMassa} >
                        
                        {
                            massas.map(massa => ( 
                                <option key={massa.id} 
                                className="li"
                                value={[massa.id, massa.preco, massa.nome]}>
                                   {massa.nome +" R$ " + massa.preco}
                                </option>
                            ))
                        }
                       <option  value={-1}></option>
                        
                    </select>
                    
                    <h2>Bordas</h2>
                    <select className="borda"  onChange={selectBorda}>
                        
                        {
                            bordas.map(borda => ( 
                                <option className="li" key={borda.id} value={[borda.id, borda.preco, borda.nome]}>
                                    {borda.nome +" R$ " + borda.preco}
                                </option>))
                        }
                        <option  value={-1}></option>
                    </select>

            
                    <h2>Recheio</h2>
                    <div className="recheio">
                        
                        <div className="conteudoRecheio">
                            <ul className="lista">
                            {recheios.map(recheio => (<li key={recheio.id} className="li">
                                {recheio.nome + "R$ "+ recheio.preco.toFixed(2) }
                                <Quantidade  id={ recheio.id} preco={recheio.preco}/>
                                </li>
                            ))}

                                
                            </ul>
                            
                        </div>
                    </div>

                </div>
                <div className="direita">
                    
                        <h1>Valor R$: {total.toFixed(2)}</h1>
                    <button className="botaoFinalizar" onClick={()=>adicionarMinhaPizza()}>Adicionar ao pedido</button>
                </div>
            </div>
            
        </div>
    );


}

