import Search from '../components/fivepage/search/Search'
import Logo from '../components/fivepage/logo/Logo'
import Icons from '../components/fivepage/icons/Icons'
import Nav from '../components/fivepage/nav/Nav'
import Posts from '../components/fivepage/posts/Posts'
import NewPost from '../components/fivepage/newPost/NewPost'
import { useState } from 'react'
// '../components/threepage/intro/Intro'
import '../components/fivepage/App.css'

function No5() {
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

export default No5
