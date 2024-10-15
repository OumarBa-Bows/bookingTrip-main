import './App.css'
import { BrowserRouter} from 'react-router-dom';
 
import AppEntryPoint from './layouts/appLayout';

function App() {
  
  return (
    <BrowserRouter >
          <AppEntryPoint />
    </BrowserRouter>
  );
}

export default App

