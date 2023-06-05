import './App.css';
import './stylesheet/header.css';
import './stylesheet/footer.css';
import logo from './multimedia/logo.png';
import Boton from './componentes/boton.js'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    
    setInput(input + valor);
  }

  const calcularResultado = () =>{
    if ( (input) && (input!=".")){
      setInput(evaluate);
    }
    else{
      alert("Por favor ingrese un valor");
      setInput('');
    }
  }

  return (
    <div className="App">

      <div className='Header-App'>
        <div className='Contenedor-logo-app'>
            <img src={logo}
              className='Logo-app'
              alt='Logo'/>
        </div>
      </div>

      <div className='Body-App'>
        <div className='Contenedor-calculadora'>
            <Pantalla input={input} />
            <div className='fila-calculadora'>
              <Boton manejarClic={agregarInput} >7</Boton>
              <Boton manejarClic={agregarInput} >8</Boton>
              <Boton manejarClic={agregarInput} >9</Boton>
              <Boton manejarClic={agregarInput} >/</Boton>
            </div>
            <div className='fila-calculadora'>
              <Boton manejarClic={agregarInput} >4</Boton>
              <Boton manejarClic={agregarInput} >5</Boton>
              <Boton manejarClic={agregarInput} >6</Boton>
              <Boton manejarClic={agregarInput} >*</Boton>
            </div>
            <div className='fila-calculadora'>
              <Boton manejarClic={agregarInput} >1</Boton>
              <Boton manejarClic={agregarInput} >2</Boton>
              <Boton manejarClic={agregarInput} >3</Boton>
              <Boton manejarClic={agregarInput} >-</Boton>
            </div>
            <div className='fila-calculadora'>
              <Boton manejarClic={agregarInput} >.</Boton>
              <Boton manejarClic={agregarInput} >0</Boton>
              <Boton manejarClic={calcularResultado} >=</Boton>
              <Boton manejarClic={agregarInput} >+</Boton>
            </div>
            <div className='fila-calculadora'>
              <BotonClear manejarClear={ () => setInput('') } >
                Clear</BotonClear>
            </div>
        </div>    
      </div>

      <div className='Footer-App'>
          <h4>@Desarrollado por Facundo Medina</h4>

      </div>

    </div>
  );
}
export default App;
