import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import About from './pages/about/about';
import Favourites from './components/favourite/favourite';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
    
        <Router basename="/screensurge">
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                <Route path="/movies/about" element={<h1>About</h1>}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="favourite" element={<Favourites />}></Route>
            </Routes>
            <Footer/>
        </Router>
        
    </div>
  );
}

export default App;
