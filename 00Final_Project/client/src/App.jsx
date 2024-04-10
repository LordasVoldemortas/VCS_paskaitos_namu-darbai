import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import MainContext from './context/Main.jsx'
import './App.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import NewUser from './components/newUser/NewUser.jsx'
import EditPost from './components/editPost/EditPost.jsx'
import EditUser from './components/editUser/EditUser.jsx'
import NewPost from './components/newPost/NewPost.jsx'
import Chairman from './pages/Chairman.jsx'
import EditStatus from './components/editStatus/EditStatus.jsx'

const App = () => {
  // const [showNewPost, setShowNewPost] = useState(false)
  const [user, setUser] = useState(null);
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users/check-auth')
    .then(resp => {
      setUser(resp.data)
    })
    .catch(err => console.log(err));
  }, []);
  
  // if (user === null) {
  //   return <div>Loading...</div>};
  // }

  const contextValues = {
    user,
    setUser
  }
  
  return (
    <>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
          <Routes>
          
              <Route path='/users/register' element={<NewUser />} />
           
              <Route path='/users/' element ={<User />} /> 
            
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            
              <Route path='/posts/new-post' element={<NewPost />} />
            
              <Route path='/users/edit-user/:identify' element={<EditUser />} />
            
              <Route path='/posts/edit-post/:identify' element={<EditPost />} />
            
              <Route path='/chairman' element={<Chairman />} />

            <Route path='/posts/:identify' element={<EditStatus />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
