import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainContext from '../context/Main.jsx'
import axios from 'axios';
import Post from '../components/post/Post.jsx'

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    // const { showNewPost, setUser } = useContext(MainContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;

        axios.get('http://localhost:3000/posts')
            .then(resp => setData(resp.data))
            .catch(err => {
                if (err.response.status === 401) {
                    setUser(false);
                    navigate('/login');
                }
            });

    }, [loading])

    return (
        <>
        <h1>Seimo narių darbotvarkės registras</h1>
        <Link to="posts/new-post" className="btn btn-success">Naujas projektas</Link>
         <table className="table">
                <thead>
                    <tr>
                        <th>Projekto pavadinimas</th>
                        <th>Aprasymas</th>
                        <th>Nuotrauka</th>
                        <th>Norima svastymo data</th>
                        <th>Statusas</th> 
                        <th>Autorius</th>
                        <th>Talpinimo data ir laikas</th>
                        
                    </tr>
                </thead>
                <tbody>
            {data.map(post =>
                <Post
                    data={post}
                    setLoading={setLoading}
                    key={post._id}
                />
                
            )}
            </tbody>
        </table>
        </>
    );
}

export default Home