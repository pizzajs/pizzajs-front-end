import React from 'react';
import Cabecalho from '../cabecalho';
import './style.css';

class Pizza extends React.Component{
    render(){
        return(
            <div className="produto">
                <header className="header">
                    <Cabecalho/>
                </header>
                <div className="info">
                    <div className="esquerda">
                        <div className="massa">
                            <h1>Massa</h1>
                            <div className="conteudoMassa">
                                <ul className="lista">
                                    <li className="li"><input type="checkbox"/>Vegana</li>
                                    <li className="li"><input type="checkbox"/>Vegana</li>

                                    <li className="li"><input type="checkbox"/>Vegana</li>

                                </ul>
                                
                            </div>
                           
                        </div>

                        <div className="borda">
                            <h1>Borda</h1>
                            <div className="conteudoBorda">
                                <ul className="lista">
                                    <li className="li"><input type="checkbox"/>Normal</li>
                                    <li className="li"><input type="checkbox"/>Catupiry</li>
                                    <li className="li"><input type="checkbox"/>Normal</li>
                                    <li className="li"><input type="checkbox"/>Catupiry</li>
                                    <li className="li"><input type="checkbox"/>Normal</li>
                                    <li className="li"><input type="checkbox"/>Catupiry</li>
                                </ul>
                                
                            </div>
                        </div>

                        <div className="recheio">
                            <h1>Recheio</h1>
                            <div className="conteudoRecheio">
                                <ul className="lista">
                                    <li className="li"><input type="checkbox"/>Calabresa</li>
                                    <li className="li"><input type="checkbox"/>Mussarela</li>
                                    <li className="li"><input type="checkbox"/>Bacon</li>
                                    <li className="li"><input type="checkbox"/>Ovo</li>
                                </ul>
                                
                            </div>
                        </div>

                    </div>
                    <div className="direita">
                        <h1>Valor R$: 35,00 </h1>
                        <button className="botaoBebida">Adiocionar bebida</button>
                        <button className="botaoFinalizar">Finalizar pedido</button>
                    </div>
                </div>
                
           </div>
        );
    }

}

export default Pizza;