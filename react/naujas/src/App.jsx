import Logo from './assets/components/logo/Logo'
import Search from './assets/components/search/Search'
import Navigation from './assets/components/navigation/Navigation'
import Intro from './assets/components/intro/Intro'
import './App.css'

function App() {

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

export default App
