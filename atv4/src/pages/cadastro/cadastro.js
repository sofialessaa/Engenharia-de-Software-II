import React from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css';

import cadeado from '../../images/cadeado.svg';
import eclipse from '../../images/eclipse.svg';
import eye from '../../images/eye.svg';
import google from '../../images/google.svg';
import user from '../../images/user.svg';
import sign from '../../images/sign.svg';


export default function Cadastro() {
  return (
    <div className="cadastro">
      <img className="ellipse-1" src={eclipse} alt=""/>
      <div className="logo-eco-tech">
      </div>
      <div className="novo-usurio">
        Novo usuário
      </div>
      <div className="text-input-user">
        <img className="user" src={user} alt=""/>
        <div className="campo-de-texto-1">
          <input 
            type="text" 
            placeholder="Digite seu user" 
            className="input-user" 
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
            />
            <div className="line-1">
            </div>
          </div>
          <img className="eye" src={eye} alt=""/>
        </div>
      </div>
      <div className="frame-1">
        <div className="checkbox">
        </div>
        <p className="termo">Li e estou de acordo com o Termo de Uso e Política de Privacidade</p>
      </div>
      <button className="button-acessar" onClick={() => window.location.href = '#'}>
        <span className="cadastrar">Cadastrar </span>
      </button>
      <div className="ou">
        ou
      </div>
      <button className="button-google">
        <img className="icon-google" src={google} alt=""/>
        <p className="texto-google">Entrar com Google</p>
      </button>
      <p>Já possui uma conta? <Link to="/cadastro" className="cadastre-se-link">Faça o Login</Link>
        <span className="cadastro-sub-0"></span></p>
    </div>
  )
}
