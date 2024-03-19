import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/0header/Header'
import First from './pages/First'
import No2 from './pages/No2'
import No3 from './pages/No3'
import No4 from './pages/No4'
import No5 from './pages/No5'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />}/> */}
          <Route path='/one' element={<First />}/>
          <Route path='/two' element={<No2 />}/>
          <Route path='/three' element={<No3 />}/>
          <Route path='/four' element={<No4 />}/>
          <Route path='/five' element={<No5 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
