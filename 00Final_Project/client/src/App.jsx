import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import MainContext from './context/Main.jsx'
import './App.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Users from './pages/User.jsx'
import NewUser from './components/newUser/NewUser.jsx'
import EditPost from './components/editPost/EditPost.jsx'
import NewPost from './components/newPost/NewPost.jsx'

const App = () => {
  // const [showNewPost, setShowNewPost] = useState(false)
  const [user, setUser] = useState();
  
  // useEffect(() => {
  //   axios.get('http://localhost:3000/users/check-auth')
  //   .then(resp => setUser(resp.data))
  //   .catch(err => console.log(err));
  // }, []);
  
  const contextValues = {
    // showNewPost,
    // setShowNewPost,
    user,
    setUser
  }
  
  return (
    <>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
          <Routes>
            <Route path='/users/register' element={<NewUser />} />
            <Route path='/users/' element ={<Users />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/posts/new-post' element={<NewPost />} />
            <Route path='/posts/edit-post/:identify' element={<EditPost />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
