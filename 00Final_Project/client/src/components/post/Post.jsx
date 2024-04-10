import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import axios from 'axios';
import MainContext from '../../context/Main'



const Post = ({ data, setPost }) => {
    const [message, setMessage] = useState('')
    const { setUser, user } = useContext(MainContext);
    

    const handleDelete = (id) => {
        const confirmed = window.confirm('Ar tikrai norite ištrinti šį įrašą?');
        if (confirmed) {
          axios.delete(`http://localhost:3000/posts/${id}`)
            .then(resp => {
              console.log(resp.data);
              setPost(true)
            })
            .catch(error => {
              console.error('Klaida:', error);
              setMessage('Įvyko klaida trinant vartotoją.');
            });
        } 
    }
    
    const getStatusColorClassName = (status) => {
      switch (status) {
          case 'Pateiktas':
              return styles.statusProvided;
          case 'Priimtas':
              return styles.statusAccepted; 
          case 'Atmestas':
              return styles.statusRejected; 
          case 'Nepakanka duomenų':
              return styles.statusInsufficientData;
          default:
              return '';
      }
  };

  const canDeleteProject = data.status_name.name !== 'Priimtas' && data.status_name.name !== 'Atmestas';
      
    return user? (
        <>
        
            <tr>
                <td>{data.project_name}</td>
                <td>{data.description}</td>
                <td>
                    <img src={'http://localhost:3000/uploads/' + data.photo} />
                </td>
                <td>{new Date(data.resolution_date).toLocaleDateString('lt-LT')}</td>
                {/* <td>{data.status_name.name}</td> */}
                <td><Link to={'/posts/' + (data._id)} className={`${styles.statusButton} ${getStatusColorClassName(data.status_name.name)}`}>
                {data.status_name.name}</Link></td>
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
                {(user._id === data.author._id && canDeleteProject) && (
                  <>
                <td> 
                    <Link to={`/posts/edit-post/` + (data._id)} className="btn btn-warning">
                        Redaguoti
                    </Link>
                </td>
                {/* )} */}
                {/* {user._id === data.author._id && canDeleteProject && ( */}
               <td>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleDelete(data._id)}
                >
                  Ištrinti
                </button>
                </td> 
                </>
                )}
            </tr>
            {message && <td colSpan="2">{message}</td>}
           
            </>
    ) : 'Negalima prieiti'
}
    export default Post