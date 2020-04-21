import React from 'react';

import './styles.css';
import Cabecalho from '../../utils/cabecalho/index';
import imgPizza from '../../assets/pizza.jpg';

export default function Home() {
    return(
        <div>
            <Cabecalho />
            <div className="paginainicial">
                <div className="navegacao">
                    <h1 className="montarpizza">Montar Pizza</h1>
                    <h1 className="escolherbebida">Bebidas</h1>
                </div>
                <div className="pizzasprontas">
                    <div className="caixapizza">
                        <h1 className="nomepizza">Calabresa</h1>
                        <img className ="imagem"src={imgPizza}/>
                    </div>
                    <div className="caixapizza">
                        <h1 className="nomepizza">Calabresa</h1>
                        <img className ="imagem"src={imgPizza}/>
                    </div>
                    <div className="caixapizza">
                        <h1 className="nomepizza">Calabresa</h1>
                        <img className ="imagem"src={imgPizza}/>
                    </div>
                    <div className="caixapizza">
                        <h1 className="nomepizza">Calabresa</h1>
                        <img className ="imagem"src={imgPizza}/>
                    </div>
                    <div className="caixapizza">
                        <h1 className="nomepizza">Calabresa</h1>
                        <img className ="imagem"src={imgPizza}/>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}