import React from 'react';

//utilizando props e components no react

const Bemvindo = (props) => {
    return(
        <div>
            <Sobre nome = {props.nome} idade = {props.idade} cargo = {props.cargo}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Nome: {props.nome}</h2>
            <h2>Cargo: {props.cargo}</h2>
            <h2>Idade: {props.idade}</h2>
        </div>
    );
}

function App(){
    return(
        <div>
        <Bemvindo nome= "Sandra" idade = "26" cargo = "Programadora"/>
        <Bemvindo nome= "Rute" idade = "23" cargo = "Recepção"/>
        <Bemvindo nome = "Cleiton" idade = "5" cargo = "Motorista"/>;
    </div>
    )
}
export default App;