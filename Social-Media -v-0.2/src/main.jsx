import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostList from './component/PostList';
import NewPost from './component/NewPost.jsx';
import { LoaderData } from './component/PostList';

const router = createBrowserRouter([{path:'/',element:<App/>,children:[
  {path:'/', element:<PostList/> , loader:LoaderData},
  {path:'/create-post', element:<NewPost /> , action:''}

]}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
