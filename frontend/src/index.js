import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom'
import Profile from './Profile';
import RouteHandler from './RouteHandler';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteHandler/>}>
      <Route path='' element={<App/>}/>
      <Route path='api/profile' element={<Profile/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
