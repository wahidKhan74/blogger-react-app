import './App.css';
import Header from './components/Header';
import ListOfTopic from './components/ListOfTopic';
import Posts from './components/Posts';

function App() {
  return (
    <div className='container'>
         {/* <Header  appname="The Bolgger Webapp"/> */}
        <ListOfTopic />
        {/* <Posts /> */}
    </div>
    
  );
}

export default App;
