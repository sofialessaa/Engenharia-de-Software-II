import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import cadeado from '../../images/cadeado.svg';
import eclipse from '../../images/eclipse.png';
import eye from '../../images/eye.svg';
import google from '../../images/google.svg';
import user from '../../images/user.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const botao = async() => {
    setEmail('')
    setSenha('')
    window.location.href = '#'
  }

  return (
    <div className="login">
      <div className="logo"></div>
      <div className='campo-de-login'>
        <h1>Entrar</h1>
        <div className="campo-user">
          <img className="user" src={user} alt=""/>
          <div className="campo-de-texto">
            <input 
              type="text" 
              placeholder="Digite seu user ou email" 
              className="text" 
              value={email}
              on onChange={event => setEmail(event.target.value)}
            />
            <div className="line-1">
            </div>
          </div>
        </div>
        <div className="campo-senha">
          <img className="lock" src={cadeado} alt=""/>
          <div className="frame-2">
            <div className="campo-de-texto-1">
              <input 
                type="text" 
                placeholder="Digite sua senha"
                className="text" 
                value={senha}
                on onChange={event => setSenha(event.target.value)}
              />
              <div className="line-11">
              </div>
            </div>
            <img className="eye" src={eye} alt=""/>
          </div>
        </div>
      </div>
      <p className="text-senha-esquecida">Esqueceu a senha?</p>
      <button className="button-acessar" onClick={botao}>
        <span className="acessar">Acessar </span>
      </button>
      <div className="ou">ou</div>
      <button className="button-google" onClick={botao}>
        <img className="flat-color-iconsgoogle" src={google} alt=""/>
        <p className="entrar-com-google">Entrar com Google</p>
      </button>
      <p className="cadastrar">Ainda não possui uma conta? <Link to="/cadastro" className="cadastre-se-link">Cadastre-se</Link></p>
      <img className="ellipse-1" src={eclipse} alt=""/>
    </div>
  )
}
