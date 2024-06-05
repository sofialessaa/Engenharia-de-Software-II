import Login from "../pages/login/login";
import Cadastro from "../pages/cadastro/cadastro";
import { Route, Routes} from "react-router-dom";

export default function AppRoutes(props){
    return(
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
    );
};