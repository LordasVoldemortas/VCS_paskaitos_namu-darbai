import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import MainContext from '../context/Main.jsx'
import axios from 'axios'

const User = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('')
  const { setUser, user } = useContext(MainContext);


  useEffect(() => {
    axios.get('http://localhost:3000/users/')
      .then(resp => setUsers(resp.data))
      .catch(error => {
        setMessage('Įvyko klaida gaunant duomenis.');
      });
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Ar tikrai norite ištrinti šį vartotoją?');
    if (confirmed) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(resp => {
          console.log(resp.data);
          setUsers(users.filter(user => user._id !== id));
        })
        .catch(error => {
          console.error('Klaida:', error);
          setMessage('Įvyko klaida trinant vartotoją.');
        });
    }
  }
  const displayPasswordInPopup = (password) => {
    alert(`Password: ${password}`);
  };

  return user?.chairman ? (
    <div className="container">
      <h1>Seimo narių sąrašas</h1>
      <div className="d-flex justify-content-between">
        <div>
          <Link to="/" className="btn btn-success mx-2">Darbotvarkės regitras</Link>
          <Link to="/users/register/" className="btn btn-success">Naujas Vartotojas</Link>
        </div>
        <div>
          <Link to='/login' className="btn btn-success">Atsijungti</Link>
          </div>
      </div>
      <div className="table-responsive">
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
                <td
                  onMouseEnter={() => displayPasswordInPopup(user.password)}
                  onMouseLeave={() => { }}
                >
                  <input type="password" value="*******" disabled />
                </td>
                {/* <td className="psw">{user.password}</td> */}
                <td>
                  <div>{new Date(user.created_at).toLocaleDateString('lt-LT')}</div>
                  <div>{new Date(user.created_at).toLocaleTimeString('lt-LT')}</div>
                </td>
                <td className="buttons">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Ištrinti
                  </button>
                </td>
                <td><Link to={`/users/edit-user/${user._id}`}
                  className="btn btn-warning"
                >Redaguoti
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {message && <div>{message}</div>}
    </div>
  ) : 'negalima';
};

export default User