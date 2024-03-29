import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/Main.jsx';
import NewPost from '../newPost/NewPost.jsx';
import style from './Post.module.css';
import axios from 'axios';


const Post = ({ data }) => {

    const { user } = useContext(MainContext);



    return (
        <>
            <tr>
                <td>{data.project_name}</td>
                <td>{data.description}</td>
                <td>
                    <img src={'http://localhost:3000/uploads/' + data.photo} />
                </td>
                <td>{new Date(data.resolution_date).toLocaleDateString('lt-LT')}</td>
                <td>{data.status_name.name}</td>
                <td>
                {data.author && (
                  <>
                    <span>{data.author.user_name}</span>
                    <span>{data.author.last_name}</span>
                    <span>{data.author.party_name}</span>
                  </>
                )}
                </td>
                <td>
                    <div>{new Date(data.created_at).toLocaleDateString('lt-LT')}</div> 
                    <div>{new Date(data.created_at).toLocaleTimeString('lt-LT')}</div>
                </td>
                <td> <Link to={`/posts/edit-user/` + (data._id)} className="btn btn-warning">Redaguoti</Link></td>
                <td> <Link to={`/posts/edit-user/` + (data._id)} className="btn btn-danger">Redaguoti</Link></td>
            </tr>
            </>
    )
}
    export default Post