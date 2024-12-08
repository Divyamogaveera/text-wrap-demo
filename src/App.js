import './App.css';
import TestExample from './Components/TestExample'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Position from './Components/Position';
import RelAbsPos from './Components/RelAbsPos';

function App() {
  return (
    <BrowserRouter>

    <Routes>

    <Route path='/' element={<TestExample/>}/>
    <Route path='/position' element={<Position/>}/>
    <Route path='/RelAbsPos' element={<RelAbsPos/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
