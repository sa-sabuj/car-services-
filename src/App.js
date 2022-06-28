
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Foorer from './Pages/Shared/Footer/Foorer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Foorer></Foorer>

    </div>
  );
}

export default App;
