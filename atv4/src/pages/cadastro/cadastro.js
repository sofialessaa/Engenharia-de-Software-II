import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css';

import cadeado from '../../images/cadeado.svg';
import eclipse from '../../images/eclipse.png';
import eye from '../../images/eye.svg';
import google from '../../images/google.svg';
import user from '../../images/user.svg';
import sign from '../../images/sign.svg';


export default function Cadastro() {

  const [userS, setUserS] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const botao = async() => {
    setUserS('')
    setEmail('')
    setSenha('')
    window.location.href = '#'
  }

  return (
    <div className="cadastro">
      <img className="ellipse-1" src={eclipse} alt=""/>
      <div className="logo-eco-tech">
      </div>
      <div className='campo-de-cadastro'>
        <h1>Novo usuário</h1>
        <div className="text-input-user">
          <img className="user" src={user} alt=""/>
          <div className="campo-de-texto-1">
            <input 
              type="text" 
              placeholder="Digite seu user" 
              className="input-user" 
              value={userS}
              on onChange={event => setUserS(event.target.value)}
            />
            <div className="line-11">
            </div>
          </div>
        </div>
        <div className="text-input-email">
          <img className="at-sign" src={sign} alt=""/>
          <div className="campo-de-texto-2">
            <input 
              type="text" 
              placeholder="Digite seu email" 
              className="input-email" 
              value={email}
              on onChange={event => setEmail(event.target.value)}
            />
            <div className="line-12">
            </div>
          </div>
        </div>
        <div className="text-input-senha">
          <img className="lock" src={cadeado} alt=""/>
          <div className="frame-2">
            <div className="campo-de-texto">
              <input 
                type="text" 
                placeholder="Digite sua senha" 
                className="input-senha"
                value={senha}
                on onChange={event => setSenha(event.target.value)} 
              />
              <div className="line-1">
              </div>
            </div>
            <img className="eye" src={eye} alt=""/>
          </div>
        </div>
      </div>
      <div className="frame-1">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
          </label>
        </div>
        <p className="termo">Li e estou de acordo com o Termo de Uso e Política de Privacidade</p>
      </div>
      <button className="button-acessar" onClick={botao}>
        <span className="cadastrar">Cadastrar </span>
      </button>
      <div className="ou">
        ou
      </div>
      <button className="button-google">
        <img className="icon-google" src={google} alt=""/>
        <p className="texto-google">Entrar com Google</p>
      </button>
      <p className="logar">Já possui uma conta? <Link to="/" className="cadastre-se-link">Faça o login</Link></p>
    </div>
  )
}
