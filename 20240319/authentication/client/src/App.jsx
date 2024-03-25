import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import MainContext from './context/Main.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import NewPost from './components/new-post/NewPost.jsx'
import User from './pages/User.jsx'
import './App.css'

const App = () => {
const [showNewPost, setShowNewPost] = useState(false)
const [user, setUser] = useState();

useEffect(() => {
  axios.get('http://localhost:3000/users/check-auth')
  .then(resp => setUser(resp.data))
  .catch(err => console.log(err));
}, []);

const contextValues = {
  showNewPost,
  setShowNewPost,
  user,
  setUser
}

  return (
    <>
      <MainContext.Provider value={contextValues}>
      <BrowserRouter>
      {/* tikrinam ar showNewPost reiksme teigiama. jei taip - atvaizduojame NewPost komponento modalini turini */}
      {showNewPost && 
        <NewPost 
          setShowNewPost={setShowNewPost}
        />
      }
        <Sidebar 
        setShowNewPost={setShowNewPost} 
        />
        
        <Routes>
          <Route path='/' element={<Home showNewPost={showNewPost} />} />
          <Route 
            path="/user/:id" 
            element={<User />} 
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
