import logo from './logo.svg';
import './App.css';
import {Routes, Route}from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './pages/home';
import Favourites from './pages/favourites';
import Details from './pages/detaits';

function App() {
  return (
    <div className="App">
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route
          path='/'
          element={
            <Home/>
          }
          />
          <Route
          path='/favourites'
          element={
            <Favourites/>
          }
          />
          <Route
          path='/recipe-item/:id'
          element={
              <Details/>
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
