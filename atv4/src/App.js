import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './componentes/rota';

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;