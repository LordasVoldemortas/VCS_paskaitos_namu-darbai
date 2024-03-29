import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MainContext from '../../context/Main.jsx'

const NewUser = () => {
  const [message, setMessage] = useState();
  const { setUser, user } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = {}
    
      for(const input of formData.entries()) {
        data[input[0]] = input[1]; 
    }
      
      axios.post('http://localhost:3000/users/register', data)
      .then (resp => {
        setMessage('registracija')
        navigate('/chairman');
  })
      .catch(err => setMessage(err.response.data.message));
    }

    return (
        <>  
            <h1>Naujas vartotojas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Vardas</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="mb-3">
          <label>Pavardė</label>
          <input type="text" className="form-control" name="last_name" />
        </div>
        <div className="mb-3">
          <label>Partijos pavadinimas</label>
          <input type="text" className="form-control" name="party_name" />
        </div>
        <div className="mb-3">
          <label>El. paštas</label>
          <input type="text" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label>Slaptažodis</label>
          <input type="password" className="form-control" name="password" />
        </div>
        <div className="mb-3">
          <label>Registracijos data</label>
          <input type="date" className="form-control" name="date" />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
      {message && <div>{message}</div>}
    </>
        
    );
}

export default NewUser;