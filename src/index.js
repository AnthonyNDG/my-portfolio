import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import {Header , Home, Projects, Contacts, Blog, Resume} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    
    <Routes>
      <Route path='/' element={
      <React.Fragment>
        <Header />
        <Home />
      </React.Fragment>
      }/>

      <Route  path='/projects' element={
        <React.Fragment>
          <Header />
          <Projects />
        </React.Fragment>
      } 
      />

      <Route  path='/contacts' element={
        <React.Fragment>
          <Header />
          <Contacts />
        </React.Fragment>
      } 
      />

      <Route path='/blog' element={
        <React.Fragment>
          <Header />
          <Blog />
        </React.Fragment>
      }
      />

      <Route path='/resume' element={
        <React.Fragment>
          <Header />
          <Resume />
        </React.Fragment>
      }
      />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
