import './App.css';
import { Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import CharactersList from './components/CharactersList/CharactersList';
import SingleCharacter from './SingleCharacter';
import FeaturedEpisodes from './components/FeaturedEpisodes/FeaturedEpisodes';
import Gallery from './components/Gallery/Gallery';
import NewsPage from './components/NewsPage/NewsPage';

function App() {
  





  
  return (
    <div className="App">
    <Routes> 
    
    <Route path = "/" element = {<HomePage/>}/>
    <Route path = "/characters-list" element = {<CharactersList/>}/>
    <Route path = "/characters-list/:charId" element = {<SingleCharacter/>}/> 
    <Route path = "/featured-episodes" element = {<FeaturedEpisodes/>}/>
    <Route path = "/gallery" element = {<Gallery/>}/>
    <Route path = "/news" element = {<NewsPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;


