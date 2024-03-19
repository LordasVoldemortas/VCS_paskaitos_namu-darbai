import Search from './components/search/Search'
import Logo from './components/logo/Logo'
import Icons from './components/icons/Icons'
import Nav from './components/nav/Nav'
import Posts from './components/posts/Posts'
import NewPost from './components/newPost/NewPost'
import { useState } from 'react'

import './App.css'

function App() {
const [reload, setReload] = useState(false)


  return (
    <main>
      <nav>
        <Search />
        <Logo />
        <Icons />
        <Nav />
      </nav>
      <div>
        <Posts reload={reload} />
      </div>
      <div>
       <NewPost setReload={setReload}/>
      </div>
    </main>
  )
}

export default App
