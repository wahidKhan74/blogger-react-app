import './App.css';
import AuthorDetails from './components/AuthorDetails';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

function App() {
  return (
    <div className='container'>
        <Navbar />
        <Header  appname="The Bolgger Webapp"/>
        <Posts />
        {/* <AuthorDetails name="Mike Smith"  number='345' status='false'/> */}
    </div>
    
  );
}

export default App;
