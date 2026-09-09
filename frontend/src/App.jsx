import Restaurantes from "./pages/Restaurantes"
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [pagina, setPagina] = useState('home');
  
  return(
    <div>
      {pagina === 'home' && (
        <Home setPagina={setPagina} />
      )}

      {pagina === 'restaurantes' && (
        <Restaurantes />
      )}
    </div>
  )
}

export default App
