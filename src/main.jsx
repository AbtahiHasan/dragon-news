import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { ApiDataProvider } from './context/ApiDataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiDataProvider>
      <RouterProvider router={Router}/>
    </ApiDataProvider>
  </React.StrictMode>,
)
