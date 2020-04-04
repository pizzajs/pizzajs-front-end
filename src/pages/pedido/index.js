import React from 'react';


import './styles.css';
import Cabecalho from '../cabecalho/index'

export default function Pedido() {

    return (    
        <>      
            <Cabecalho />
            <div className = "caixaPricipal">
                <section className="caixa">
                    <h1>Meu Pedido</h1>
                        <div className="aux">
                            <div className="pizza">
                                <div className="info">
                                    <h1>pizza criada</h1>
                                </div>
                                <h1 className="valor">valor total: 0</h1>
                            </div>
                            <div className="bebida">
                                <h1>bebidas</h1>
                            </div>
                          
                        </div>
                </section>
            </div>
        </>
    );
}