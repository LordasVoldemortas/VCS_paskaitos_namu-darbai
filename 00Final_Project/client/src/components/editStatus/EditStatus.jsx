import { useState, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import MainContext from '../../context/Main'
import axios from 'axios'

const EditStatus = ({ data }) => {
    const { setUser, user } = useContext(MainContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [selectedStatus, setSelectedStatus] = useState(data && data.status ? data.status : '');
    const { identify } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3000/posts/${identify}`, { 
            status_name: selectedStatus 
        }
        ) 
        .then(resp => {
            setMessage("Statusas sėkmingai pakeistas");
            navigate('/');
        })
        .catch(err => setMessage(err.response.data));
};

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    }

    return user?.chairman ? (
        <div className='container'>
            <h1>Statuso pakeitimas</h1>
            <select value={selectedStatus} onChange={handleStatusChange}> 
                <option disabled value="">Pasirinkite statusą</option> 
                <option value="6602c9a387f136d4e55a0110">Priimtas</option>
                <option value="6602c9c387f136d4e55a0112">Atmestas</option>
                <option value="6602cceb87f136d4e55a0126">Nepakanka duomenų</option>
            </select>
            <button className="btn btn-primary" onClick={handleSubmit}>Pakeisti</button> 
            {message && <p>{message}</p>} 
        </div>
    ) : 'Negalima prieiti';
}
 


export default EditStatus;

