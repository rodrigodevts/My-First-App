import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import LogoImg from '../../assets/logo.svg';


export default function Register(){
  const [name, setName ]         = useState('');
  const [email, setEmail ]       = useState('');
  const [whatsApp, setWhatsApp ] = useState('');
  const [city, setCity ]         = useState('');
  const [uf, setUf ]             = useState('');

  const history = useHistory();
  
  async function handRegister(e){
      e.preventDefault();

      const data = {
          name,
          email,
          whatsApp,
          city,
          uf,
      };
      try{
        const reponse = await api.post('/ongs',data);
        alert(`Seu ID de acesso: ${reponse.data.id}`);
        history.push('/');
      }catch(err){
        alert('Error:'+err); 
      }
      
    
  }

  return (
    <div className="register-container">
      <div className="content">

        <section>
          <img src={LogoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handRegister}>
          <input 
            placeholder="Nome da ONG"
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <input type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <input 
            placeholder="WhatsApp"
            value={whatsApp}
            onChange={e=>setWhatsApp(e.target.value)}
          />
              <div className="input-group">
                <input 
                  placeholder="Cidade"
                  value={city}  
                  onChange={e=>setCity(e.target.value)}
                />
                <input 
                  placeholder="UF" 
                  style={ { width: 80} }
                  value={uf}  
                  onChange={e=>setUf(e.target.value)}
                />
              </div>
          <button className="button" type="submit" >Cadastrar</button>
        </form>

      </div>
    </div>
  );
}