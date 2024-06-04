import './login.css'
import cadeado from '../../images/cadeado.svg'
import eclipse from '../../images/eclipse.svg'
import eye from '../../images/eye.svg'
import google from '../../images/google.svg'
import user from '../../images/user.svg'

export default function Login() {
  return (
    <div className="login">
      <img className="ellipse-1" src={eclipse} alt=""/>
      <div className="logo-eco-tech"></div>
      <div className="entrar">
        Entrar
      </div>
      <div className="text-input-user">
        <img className="user" src={user} alt=""/>
        <div className="campo-de-texto">
          <div className="digite-seu-user-ou-email">
            Digite seu user ou email<br />
          </div>
          <div className="line-1">
          </div>
        </div>
      </div>
      <div className="text-input-senha">
        <img className="lock" src={cadeado} alt=""/>
        <div className="frame-2">
          <div className="campo-de-texto-1">
            <div className="digite-sua-senha">
              Digite sua senha<br />   
            </div>
            <div className="line-11">
            </div>
          </div>
          <img className="eye" src={eye} alt=""/>
        </div>
      </div>
      <div className="esqueceu-asenha">
        Esqueceu a senha?
      </div>
      <div className="button-acessar">
        <span className="acessar">
          Acessar
        </span>
      </div>
      <div className="ou">
        ou
      </div>
      <div className="button-google">
        <img className="flat-color-iconsgoogle" src={google} alt=""/>
        <div className="entrar-com-google">Entrar com Google
        </div>
      </div>
      <p className="ainda-no-possui-uma-conta-cadastre-se">Ainda não possui uma conta? Cadastre-se<span className="ainda-no-possui-uma-conta-cadastre-se-sub-0"></span><span></span></p>
    </div>
  )
}