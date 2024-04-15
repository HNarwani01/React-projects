import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Headers from './component/Header';
import Footers from './component/footers';
import Slidebars from './component/Slidebars';
import NewPost from './component/NewPost';
import PostList from './component/PostList';
import {Outlet} from 'react-router-dom'
import { useState } from 'react';
import PostListProvider from './Store/PostListStore';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [currentTab, setcurrentTab] = useState('HOME')
  return (
    <PostListProvider>
    <div className="appconatiner">
      <Slidebars method={setcurrentTab} tab={currentTab}/>
      <div className='component'>
      <Headers/>
      <Outlet />
      <Footers/>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
