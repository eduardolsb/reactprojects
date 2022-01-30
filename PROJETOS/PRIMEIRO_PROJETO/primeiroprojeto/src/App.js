
import './App.css';
import React, { Component, useState }  from 'react';
import {  FiSearch } from 'react-icons/fi';
import api_axios from './services/api_axios';

function App() {

  const [msgstatus, setMsgStatus] = useState('Não tem registro');
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function getValueInput ()  {   

    if(input == ''){
      alert('Precisa escrever um CEP');
      return false;
    }

    try{
      var response = await api_axios.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    }
    catch(ex){
      alert('Erro!');
    }
  }


  return (
    <div className="App">
      
      <h1>Consulta CEP</h1>
      
      <div className="container">
        
        <input 
          placeholder="Digite seu CEP" 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} />

        <button 
          onClick={getValueInput}> 
            <FiSearch size={25} color="black" />
        </button>

      </div>


      {Object.keys(cep).length !== 0 && (

        <div className="container margin5">
          <p><b>{cep.cep}</b></p>
          <p>{cep.logradouro}</p>
          <p>{cep.bairro}</p>
          <p>{cep.localidade}</p>
          <p>{cep.uf}</p>
        </div>

      )}

      {Object.keys(cep).length === 0 && (

      <div className="container margin5">
        <p><b>{msgstatus}</b></p>
      </div>

      )}
      


    </div>
  );
}

export default App;
