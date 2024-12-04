import './App.css';
import TestExample from './Components/TestExample'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Position from './Components/Position';

function App() {
  return (
    <BrowserRouter>

    <Routes>

    <Route path='/' element={<TestExample/>}/>
    <Route path='/position' element={<Position/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
