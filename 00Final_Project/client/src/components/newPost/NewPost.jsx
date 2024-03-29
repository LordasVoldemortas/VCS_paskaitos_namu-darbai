import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from '../../context/Main.jsx'
import axios from 'axios';

const NewPost = () => {
        const [message, setMessage] = useState();
        // const { setUser, user } = useContext(MainContext);
        const navigate = useNavigate();
      
        const handleSubmit = (e) => {
            e.preventDefault();
      
            const formData = new FormData(e.target);
            // formData.append('author', user._id)
            
            axios.post('http://localhost:3000/posts/', formData) /*data? */
            
            .then(resp => {
            //   setMessage('sukurta')
              navigate('/');
            })
            .catch(err => {
                console.log(err);
                setMessage(err.response.data.message)
            });
          }

  return (
    <>
      <h1>Naujas projektas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Projekto pavadinimas</label>
          <input
            type="text"
            className="form-control"
            name="project_name"
            // defaultValue={message.project_name}
          />
        </div>
        <div className="mb-3">
          <label>Nuotrauka</label>
          <input
            type="file"
            className="form-control"
            name="photo"
            // defaultValue={message.photo}
          /> 
          </div>

        <div className="mb-3">
          <label>Aprašymas</label>
          <input
            type="text"
            className="form-control"
            name="description"
            // defaultValue={message.description}
          />
        </div>
        <div className="mb-3">
          <label>Talpinimo data</label>
          <input
            type="date"
            className="form-control"
            name="created_at"
            // defaultValue={message.resolution_date}
          />
        </div>
        <div className="mb-3">
          <label>Svarstymo data</label>
          <input
            type="date"
            className="form-control"
            name="resolution_date"
          />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
      {message && <div>{message}</div>}
    </>
  );
};

export default NewPost;