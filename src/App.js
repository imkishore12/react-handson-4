
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import StoreCompo from './Components/StoreCompo';




function App() {
  return (
    <div className="App">
      <StoreCompo>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
     
      </StoreCompo>

     
      
    </div>
  );
}

export default App;
