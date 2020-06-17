import React, {useEffect, useState }from 'react';
import Cabecalho from '../../utils/cabecalho';
import './style.css';
import Checkbox from '../../utils/checkbox';
import api from '../../services/api';
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";


export default function Pizza (){
    const [bordaSelecionada, setBordaSelecionada] = useState("");
    const [massaSelecionada, setMassaSelecionada] = useState("");
    const [recheioSelecionado, setRecheioSelecionado] = useState([]);
    const [massas, setMassas] = useState([]);
    const [bordas, setBordas] = useState([]);
    const [recheios, setRecheios] = useState([]);
    const [ingredientesIds, setIngredientesIds] = useState([]);
    const [quantidade, setQuantidade] = useState({});
    const [valorRecheio, setValorRecheio] = useState(0);
    const [valorMassa, setValorMassa] = useState(0);
    const [valorBorda, setValorBorda] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        async function getIngredientes(){
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
                qtd[recheio.id] = 0;
            })
            setQuantidade(qtd);
        }

        getIngredientes();
        
    },[])

    function selectMassa(event){
        const massaPreco = event.target.value.split(',');
        setValorMassa(Number(massaPreco[1])); 
        setTotal(Number(massaPreco[1]) + valorBorda + valorRecheio )
    }
    function selectBorda(event){
        const bordaPreco = event.target.value.split(',');
        setValorBorda(Number(bordaPreco[1])); 
        setTotal(Number(bordaPreco[1]) + valorMassa + valorRecheio )
    }
    
    function adicionarRecheio(id, preco){
        let cont = {};
        cont = quantidade;
        cont[id] += 1;
        setValorRecheio(valorRecheio + preco);
        setQuantidade(cont);
        setTotal(total + preco);        
    }
    function decrementarRecheio(id, preco){

        if(quantidade[id] ==0){
            setTotal(total);
        }
        else{
            let cont = {};
            cont = quantidade;
            cont[id] -= 1;
            
            setTotal(total- preco);
            setValorRecheio(valorRecheio - preco);

            setQuantidade(cont);

        }
                
    }

    function Quantidade({id,preco}){
        
        return(
            <div className="botoesRecheio">
                <FiMinusSquare className='butaoRecheio' size={25} onClick={()=>decrementarRecheio(id, preco)}/>
                   <h4>{quantidade[id]}</h4>
                <FiPlusSquare className='butaoRecheio' size={25} color="#red" onClick={()=>adicionarRecheio(id, preco)}/>
            </div>
        );
    }

    return(
        <div className="produto">
            <header className="header">
                <Cabecalho/>
            </header>
            <div className="info">
                <div className="esquerda">
                    <h2>Massas</h2>
                    <select className="massa" onChange = {selectMassa} >
                        {
                            massas.map(massa => ( 
                                <option key={massa.id} 
                                className="li"
                                value={[massa.id, massa.preco]}>
                                   {massa.nome +" R$ " + massa.preco}
                                </option>
                            ))
                        }
                       
                        
                    </select>
                    {/* <div className="massa">
                        <h1>Massa</h1>
                        <div className="conteudoMassa">
                            <ul className="lista">
                                <li className="li"><Checkbox Item="Vegana"/></li>

                            </ul>
                            
                        </div>
                        
                    </div> */}
                    <h2>Bordas</h2>
                    <select className="borda"  onChange={selectBorda}>
                        
                        {
                            bordas.map(borda => ( 
                                <option className="li" key={borda.id} value={[borda.id, borda.preco]}>
                                    {borda.nome +" R$ " + borda.preco}
                                </option>))
                        }
                        
                    </select>

                    {/* <div className="borda">
                        <h1>Borda</h1>
                        <div className="conteudoBorda">
                            <ul className="lista">
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            </ul>
                            
                        </div>
                    </div> */}
            
                    <h2>Recheio</h2>
                    <div className="recheio">
                        
                        <div className="conteudoRecheio">
                            <ul className="lista">
                            {recheios.map(recheio => (<li key={recheio.id} className="li">
                                {recheio.nome + "R$ "+ recheio.preco.toFixed(2) }
                                <Quantidade  id={ recheio.id} preco={recheio.preco}/>
                                </li>
                            ))}

                            {/* <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li>
                            <li className="li"><Checkbox Item="teste " /> </li> */}
                                
                            </ul>
                            
                        </div>
                    </div>

                </div>
                <div className="direita">
                    
                        <h1>Valor R$: {total.toFixed(2)}</h1>
                    <button className="botaoFinalizar">Adicionar ao pedido</button>
                </div>
            </div>
            
        </div>
    );


}

