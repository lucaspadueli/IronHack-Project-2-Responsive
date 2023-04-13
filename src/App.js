import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Routes> 
    
    <Route path = "/" element = {<HomePage/>}/>
    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
