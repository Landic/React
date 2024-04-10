import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Information from './Components/FirstTask/information';
import City from './Components/SecondTask/City';
import Book from './Components/ThirdTask/Book';

function App() {
  return (
<Router>
      <header>
        <div className='container'>
          <Navigation/>
        </div>
      </header>
      <main>
        <div className = "container">
          <Routes>
            <Route path='/Information' element={<Information/>}/>
            <Route path='/City' element={<City/>}/>
            <Route path='/Book' element={<Book/>}/>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
