import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/class' element={ <Class/> } />
          <Route path='*' element={ <ErrorRoute/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
