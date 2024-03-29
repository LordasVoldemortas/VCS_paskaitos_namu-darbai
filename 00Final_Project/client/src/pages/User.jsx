import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'


const User = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/users/')
        .then(resp => setUsers(resp.data))
        .catch(error => {
            console.error('Klaida:', error);
            setMessage('Įvyko klaida gaunant duomenis.');
        });
    }, []);
    
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/users/${id}`)
          .then(resp => {
              console.log(resp.data);
              setUsers(users.filter(user => user._id !== id));
              setLoader(false); // įsitikinkite, kad loader būsena pakeičiama atgal į false
          })
          .catch(error => {
              console.error('Klaida:', error);
              setMessage('Įvyko klaida trinant vartotoją.');
          });
}   
    
    // si langa mato tik seimo pirmininkas, jis gali registruoti, istrinti ir editinti vartotojus
    // seimo pirmininkas gali keisti postu statusa 
  
  return (
    <>
      <h1>Seimo narių sąrašas</h1>
      <Link to="/users/register" className="btn btn-success">Naujas Vartotojas</Link>
      <table className="table">
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Vardas</th>
          <th>Pavardė</th>
          <th>Partijos pavadinimas</th>
          <th>El. paštas</th>
          <th>Slaptažodis</th>
          <th>Registracijos data</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.last_name}</td>
            <td>{user.party_name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.created_at}</td>
            <td>
            <button className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
            >Ištrinti
            </button> 
            
                  <Link to={`/admin/edit-user/${user._id}`}
                  className="btn btn-warning"
             >Redaguoti
                    </Link>
            </td>
          </tr>
        ))}
        
      </tbody>
    </table>
      {message && <div>{message}</div>}
    </>
  );
};

export default User;