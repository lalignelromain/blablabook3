import React from 'react'
import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import '../App/App.css'
// import './index.css'
// import  { BrowserRouter } from 'react-router-dom'
// import AppContextProvider from './context/AppContext.jsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '../router/Router'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
