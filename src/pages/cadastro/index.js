import React from  'react';


export default function Cadastro() {
    return(
        <div className="container" >
            <section className="caixaDeCampos">
                <form  onSubmit={()=>{}}>
                    <h1>Seja bem vindo<br/>ao<br/>Pizza js</h1>
                    <input className="campo" type="text" placeholder="E-mail"/>
                    <input className="campo" type="text" placeholder="Senha"/>
                    <button className="botaoVermelho" onClick={()=>{}}>Entrar</button>
                    
                </form>
                <Link className="link" to ="/">
                    Não tenho cadastro 
                </Link>
                
            </section>
        </div>
    );
}