//importar modulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componentes
class MeuComponente extends React.Component{
    render(){
        return <h1>Meu primeiro componente</h1>;
        }
}

// render
ReactDOM.render(<MeuComponente /> , document.getElementById('root'));