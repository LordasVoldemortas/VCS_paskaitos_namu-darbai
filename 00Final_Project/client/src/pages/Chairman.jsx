import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/Main.jsx';
import axios from 'axios';
import User from '../pages/User.jsx';
import { Link } from 'react-router-dom';

const Chairman = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { showNewPost, setUser } = useContext(MainContext); 
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) return;

        axios.get('http://localhost:3000/users/')
        .then(resp => setData(resp.data))
        .catch(err => {
            if(err.response.status === 401) {
                setUser(false);
                navigate('/chairman');
            }
        });
    }, [showNewPost, loading]);

    return (
        <>

            <div className="d-flex justify-content-between align-items-center">
            <Link to="/users/register/" className="btn btn-success">Naujas Vartotojas</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>

                        <th>Vardas</th>
                        <th>Pavarde</th>
                        <th>Partijos pavadinimas</th>
                        <th>El. Pasto adresas</th>
                        <th>Slaptazodis</th>
                        <th>Registracijos data</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => 
                        <User 
                            data={user} 
                            // setLoading={setLoading} 
                            key={user._id} 
                        />
                    )}
                </tbody>
            </table>
            </>
    );
}

export default Chairman;