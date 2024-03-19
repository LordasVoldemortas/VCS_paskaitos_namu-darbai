import './App.css'
import logo from './assets/react.svg'
import Button from './components/button/Button.jsx'

// Komponentai (components) visad rasomas is didziosios raides function App(). 
function App() {
  // grazinamas turinys is komponento
  // JSX sintakse
  // kiekvienas komponentas PRIVALO grazinti tik viena JSX elementa
  // <></> yra fragmentas(fragment)
  return (
  <>
    <img src={logo} /> 
    <h1>Hello World</h1>
    <h2>How are you?</h2>
    <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, repellat. Minima, cum ducimus cumque repudiandae soluta voluptatibus autem veritatis et pariatur esse inventore dolores nobis.</p>
    <Button />
  </>
  )
}

export default App
