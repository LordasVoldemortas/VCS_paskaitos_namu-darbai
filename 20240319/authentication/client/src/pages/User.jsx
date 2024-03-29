import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import UserProfile from '../components/user-profile/UserProfile.jsx'
import UserPosts from '../components/user-posts/UserPosts.jsx';
// komponentas userprofile

const User = () => {
const [data, setData] = useState({})
const [message, setMessage] = useState();
const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)    
        .then(resp => {
            console.log(resp)
            setData(resp.data)
        })
        .catch(err => setMessage(err.message))

    }, [])
    return (
        <>
            <UserProfile data={data}  />
            <UserPosts data={data.posts} />
        </>
    );
}

export default User;

