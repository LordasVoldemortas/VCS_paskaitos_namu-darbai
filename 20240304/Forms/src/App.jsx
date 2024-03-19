import { useState } from 'react'
import Form from '../components/form/Form'
import './App.css'

const App = () => {
  const [data, setData] = useState({
    name: '',
    topic: '',
    message: ''
  })

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // CRUD: Create Read Update Delete


  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className='form-control'
            placeholder='įveskite savo vardą'
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className='form-control'
            placeholder='įveskite temą'
            name='topic'
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className='form-control'
            placeholder='įveskite žinutę'
            name='message'
            onChange={handleChange}
          ></textarea>
        </div>
        <div>Vardas: {data.name}</div>
        <div>Tema: {data.topic}</div>
        <div>Žinutė: {data.message}</div>
      </form>
      <Form />
    </>
  )
}

export default App
