import './cadastro.css'
import cadeado from '../../images/cadeado.svg'
import eclipse from '../../images/eclipse.svg'
import eye from '../../images/eye.svg'
import google from '../../images/google.svg'
import user from '../../images/user.svg'
import sign from '../../images/sign.svg'

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
          <div className="digite-seu-user">
            Digite seu user<br />
            
          </div>
          <div className="line-11">
          </div>
        </div>
      </div>
      <div className="text-input-email">
        <img className="at-sign" src={sign} alt=""/>
        <div className="campo-de-texto-2">
          <div className="digite-seu-email">
            Digite seu email<br />
            
          </div>
          <div className="line-12">
          </div>
        </div>
      </div>
      <div className="text-input-senha">
        <img className="lock" src={cadeado} alt=""/>
        <div className="frame-2">
          <div className="campo-de-texto">
            <div className="digite-sua-senha">
              Digite sua senha<br />
              
            </div>
            <div className="line-1">
            </div>
          </div>
          <img className="eye" src={eye} alt=""/>
        </div>
      </div>
      <div className="frame-1">
        <div className="checkbox">
        </div>
        <p className="termo">
          <span className="termo-sub-8"></span><span></span>
        </p>
      </div>
      <div className="button-acessar">
        <span className="cadastrar">
          Cadastrar
        </span>
      </div>
      <div className="ou">
        ou
      </div>
      <div className="button-google">
        <img className="flat-color-iconsgoogle" src={google} alt=""/>
        <div className="entrar-com-google">
          Entrar com Google
        </div>
      </div>
      <p className="jpossui-uma-conta-faa-ologin">
        <span className="jpossui-uma-conta-faa-ologin-sub-0"></span><span></span>
      </p>
    </div>
  )
}