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
import { useDispatch, useSelector } from 'react-redux';
import { decreament, getPosts, increament, loggedIn } from './actions';

function App() {
  const counter = useSelector(state=> state.counter );
  const isLogged = useSelector(state=> state.isLogged);
  const posts = useSelector(state=> state.posts);
  const dispatch = useDispatch();
  return (
    <div className='container'>
        <Navbar isLoggedIn = 'false' />
        <Header  appname="The Bolgger Webapp"/>
        
        <div className='App'>
            <h1>The Counter :  {counter}</h1>
            <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(increament(5)) }}> +5 Inc </button>
            <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(decreament(5)) }}> -5 Dec </button>
            <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(loggedIn()) }}> Login User </button>
            <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(getPosts()) }}> Get All Posts </button>
        </div>
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
