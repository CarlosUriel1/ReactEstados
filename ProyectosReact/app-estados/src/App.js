import './App.css';
import { estados } from './estados';
import {BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <h3 className='m-3 d-flex justify-content-center'>React </h3>

      <Routes >
      <Route path='/' Component={estados}/>
      </Routes >
    </div>
    </BrowserRouter>
  
  );
}

export default App;
