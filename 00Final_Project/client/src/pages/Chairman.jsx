import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/Main.jsx';
import axios from 'axios';
import User from './User.jsx';
import { Link } from 'react-router-dom';

const Chairman = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (loading) return;

    axios.get('http://localhost:3000/users/')
      .then(resp => {
        setData(resp.data);
        // setLoading(false);
      })
      .catch(err => {
        if (err.response.status === 401) {
          setUser(false);
          navigate('/users');
        }
        // setLoading(false); // Svarbu nustatyti loading į false, jei gaunama klaida
      });
  }, []);

  // const firstUserId = data.length > 0 ? data[0]._id : ''; 
  // const editUserLink = `/chairman/edit-user/${firstUserId}`;

  return user?.chairman ? (
    <>
      <div >
        <User />
        {/* <Link to="/users/register/" className="btn btn-success">Naujas Vartotojas</Link> */}
        {/* <Link to={editUserLink} className="btn btn-warning">Redaguoti</Link> */}
        {/* <div>
          {data.map((user) => (
            <div key={user.id}>
              <Link to={`/chairman/edit-user/${user._id}`} className="btn btn-warning">
                Redaguoti
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </>
  ) : 'Negalima prieiti';
}

export default Chairman;