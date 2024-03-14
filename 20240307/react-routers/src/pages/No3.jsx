import Logo from '../components/threepage/logo/Logo'
import Search from '../components/threepage/search/Search'
import Navigation from '../components/threepage/navigation/Navigation'
import Intro from '../components/threepage/intro/Intro'

import '../components/threepage/app.css'

function No3() {

  return (
    <>
      <header>
        <div className="container">
          <Logo />
          <Search />
          <Navigation />
        </div>
       
      </header>
      <main>
         <div className="intro">
          <Intro />
        </div>
        
      </main>
    </>
  )
}

export default No3
