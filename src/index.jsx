import { createRoot } from 'react-dom/client';

// CORREÇÃO AQUI: Importe App sem as chaves, pois é um export default.
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
