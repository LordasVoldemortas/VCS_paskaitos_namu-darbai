import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { Link } from 'react-router-dom'
import MainContext from '../../context/Main'

const EditPost = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState()
  const { setUser, user } = useContext(MainContext);

  const navigate = useNavigate();

  const { identify } = useParams();

  useEffect(() => {

 // Vartotojo duomenų paėmimas
      // AXIOS UŽKLAUSOS FORMAVIMAS
          axios.get('http://localhost:3000/posts/' + identify )// Pagal posto ID
          .then(resp => setForm(resp.data))
          .catch(err => setMessage(err.response.data));
  }, []);

  // Formos duomenų įrašymas
  const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      //Ivesti posto ID (put)
      axios.put('http://localhost:3000/posts/' + identify, formData )
      .then(resp => navigate('/'))
      .catch(err => setMessage(err.response.data));
  
  };

  return user? (
    <div className='container'> 
      <h1>Įrašo redagavimas</h1>
      {message && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Projekto pavadinimas</label>
          <input
            type="text"
            className="form-control"
            name="project_name"
            // defaultValue={message.project_name}
          />
        </div>
        <div className="mb-3">
          <label>Nuotrauka</label>
          <input
            type="file"
            className="form-control"
            name="photo"
            // defaultValue={message.photo}
          /> 
          </div>

        <div className="mb-3">
          <label>Aprašymas</label>
          <input
            type="text"
            className="form-control"
            name="description"
            // defaultValue={message.description}
          />
        </div>
        {/* <div className="mb-3">
          <label>Talpinimo data</label>
          <input
            type="date"
            className="form-control"
            name="created_at"
            // defaultValue={new Date(form.hearing_at).toLocaleDateString('lt-LT')}
            // defaultValue={message.resolution_date}
          />
        </div> */}
        <div className="mb-3">
          <label>Svarstymo data</label>
          <input
            type="date"
            className="form-control"
            name="resolution_date"
          />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
      
    </div>
  ) : 'Negalima prieiti';
};

export default EditPost;