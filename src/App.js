
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Login  from './components/Login/Login';
import SignUp from './components/SingUp/SignUp'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='SignUp' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
