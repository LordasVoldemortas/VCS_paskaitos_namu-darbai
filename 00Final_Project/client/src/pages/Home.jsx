import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainContext from '../context/Main.jsx'
import axios from 'axios';
import Post from '../components/post/Post.jsx'


const Home = () => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false);
    const {user, setUser} = useContext(MainContext)
    const navigate = useNavigate();
const [post, setPost] = useState(false)

    useEffect(() => {
        // Pridėjome sąlygą, kad gavimo duomenų iš serverio užklausa bus atlikta tik jei 'loading' būsena yra true
        // if (loading) {
            axios.get('http://localhost:3000/posts')
                .then(resp => {
                    console.log(resp)
                    setData(resp.data);
                    // setLoading(false); // Nustatome 'loading' būseną kaip false, nes duomenys gauti sėkmingai
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        setUser(false);
                        navigate('/login');
                    }
                    // setLoading(false); // Nustatome 'loading' būseną kaip false, nes gavimo duomenų metu įvyko klaida
                });
        // }
    }, [navigate, setUser, post]);

    if (Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('created_at')) {
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    // if (Array.isArray(data) && data.length > 1) {
    //     data.sort((a, b) => new Date(b.resolution_date) - new Date(a.resolution_date));
    // }

    return user? (
        <div className='container'>
        <h1>Seimo narių darbotvarkės registras</h1>
        <div className="d-flex justify-content-between">
            <div>
                <Link to="posts/new-post" className="btn btn-success">Naujas projektas</Link>
                <Link to="/users/" className="btn btn-success mx-2">Seimo narių sąrašas</Link> 
            </div>
            <div>
                <Link to='/login' className="btn btn-success mx-2">Atsijungti</Link>
            </div>
        </div>
        <div className='table-responsive'>
        <table className="table">
                <thead>
                    <tr>
                        <th>Projekto pavadinimas</th>
                        <th>Aprasymas</th>
                        <th className='photo'>Nuotrauka</th>
                        <th className='px-1'>Norima svastymo data</th>
                        <th>Statusas</th> 
                        <th>Autorius</th>
                        <th>Talpinimo data ir laikas</th>
                        
                    </tr>
                </thead>
                <tbody>
            {data.map(post =>
                <Post
                    data={post}
                    key={post._id}
                    setPost={setPost}
                />
                
            )}
            </tbody>
        </table>
        </div>
        </div>
    ) : 'Negalima prieiti' ;
}

export default Home