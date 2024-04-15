import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './component/HomePage.jsx'
import CartPage from './component/CartPage.jsx'

const router = createBrowserRouter([{path:'/', element:<App/>,children:[
  {path:'/', element:<HomePage/> },
  {path:'/cart', element:<CartPage/>, action:''}
]}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
