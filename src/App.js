import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorDetails from './components/AuthorDetails';
import Header from './components/Header';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Posts } from './components/Posts';
import { Users } from './components/Users';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  return (
    <div className='container'>
        <Navbar isLoggedIn = 'false' />
        <Header  appname="The Bolgger Webapp"/>
        
        {/* define routes */}
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/users" element={ <Users /> } />
          <Route path="/posts" element={ <Posts /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
    </div>
    
  );
}

export default App;
