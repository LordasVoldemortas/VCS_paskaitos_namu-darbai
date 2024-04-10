import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from '../../context/Main'
import axios from 'axios'
import style from './EditUser.module.css'

const EditUser = () => {
    const [form, setForm] = useState({});
    const [message, setMessage] = useState()
    const { setUser, user } = useContext(MainContext);

    const navigate = useNavigate();
  
    const { identify } = useParams();
  
    useEffect(() => {
  
   // Vartotojo duomenų paėmimas
        // AXIOS UŽKLAUSOS FORMAVIMAS
            axios.get('http://localhost:3000/users/' + identify )// Pagal posto ID
            .then(resp => setForm(resp.data))
            .catch(err => setMessage(err.response.data));
    }, []);
  
    // Formos duomenų įrašymas
    const handleSubmit = (e) => {
        e.preventDefault();
  
        const formData = new FormData(e.target);
        //Ivesti posto ID (put)
        axios.put('http://localhost:3000/users/' + identify, formData )
        .then(resp => navigate('/chairman'))
        .catch(err => setMessage(err.response.data));
    
    };
    return user?.chairman ? (
        <div className="container">
            <h1>Vartotojo redagavimas</h1>
            {message && <div className="alert alert-danger">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                    // defaultValue={message.project_name}
                    />
                </div>
                <div className="mb-3">
                    <label>Pavardė</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                    // defaultValue={message.project_name}
                    />
                </div>
                <div className="mb-3">
                    <label>Partijos pavadinimas</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                    // defaultValue={message.project_name}
                    />
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </ div>
    ) : 'Negalima';
}

export default EditUser