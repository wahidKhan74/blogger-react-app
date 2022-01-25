import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import {increament, decreament , loggedIn} from './actions';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


// STORE -> global state object
let stateStore = createStore(rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ &&   window.__REDUX_DEVTOOLS_EXTENSION__() )
);
// console.log(state);

// // Print state value
// stateStore.subscribe( ()=>{
//   console.log(stateStore.getState());
// });

// // DISPATCH
// stateStore.dispatch(increament());
// stateStore.dispatch(increament());
// stateStore.dispatch(increament());
// stateStore.dispatch(decreament());
// stateStore.dispatch(loggedIn());


ReactDOM.render(
  <React.StrictMode>
    <Provider  store={stateStore} >
      <BrowserRouter >    
        <App  />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
