import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from '../../context/Main.jsx'
import axios from 'axios';

const NewPost = () => {
  const [message, setMessage] = useState();
  const { setUser, user } = useContext(MainContext);
  const navigate = useNavigate();

  const { identify } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("author", user._id);

    // const existingPost = await axios.get("http://localhost:3000/posts", {
    //   params: {
    //     resolution_date: formData.get("resolution_date"),
        
    //   },
    // });

    // if (existingPost.data.length > 0) {
    //   setMessage(
        
    //     "Negalima pridėti naujo projekto, nes jau yra projektas su tokiu pačiu svarstymo diena."
    //   );
    //   return;
    // }

    axios.post('http://localhost:3000/posts' , formData) /*data? */

      .then(resp => {
        //   setMessage('sukurta')
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        setMessage(err.response.data.message)
      });
  }

  return user? (
    <div className='container'>
      <h1>Naujas projektas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Projekto pavadinimas</label>
          <input
            type="text"
            className="form-control"
            name="project_name"
          />
        </div>
        <div className="mb-3">
          <label>Nuotrauka</label>
          <input
            type="file"
            className="form-control"
            name="photo"
          />
        </div>

        <div className="mb-3">
          <label>Aprašymas</label>
          <input
            type="text"
            className="form-control"
            name="description"
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
    </div>
  ) : 'Negalima prieiti';
};

export default NewPost;