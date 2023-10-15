import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import KanbanBord from './KanbanBord';
import DashBoard from './DashBoard';
import Priority from './Priority';
import  User from './User';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<KanbanBord/>}/>
      <Route path='/Priority' element={<Priority/>}/>
      <Route path='/User' element={<User/>}/>
      
    </Routes>
    </BrowserRouter> 
 
  </Provider>
  </>
  // <React.StrictMode>

  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
