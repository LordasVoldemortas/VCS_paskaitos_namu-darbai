import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'


const User = ({ data }) => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState()

//     useEffect(() => {
//         axios.get('http://localhost:3000/users/')
//         .then(resp => setUsers(resp.data))
//         .catch(error => {
//             console.error('Klaida:', error);
//             setMessage('Įvyko klaida gaunant duomenis.');
//         });
//     }, []);
    
//     const handleDelete = (id) => {
//       setLoader(true)
//       axios.delete(`http://localhost:3000/users/${id}`)
//           .then(resp => {
//               console.log(resp.data);
//               setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
//               setLoader(false); // įsitikinkite, kad loader būsena pakeičiama atgal į false
//           })
//           .catch(error => {
//               console.error('Klaida:', error);
//               setMessage('Įvyko klaida trinant vartotoją.');
//               setLoader(false)
//           });
// }   
    
const handleDelete = (id) => {
  axios
    .delete(`http://localhost:3000/users/${id}`)
    .then((resp) => {
      console.log(resp.data);
      // Atnaujiname vartotojų sąrašą, pašalinant ištrintą vartotoją
      // Galima buvo panaudoti prevUsers, jeigu norite, kad būtų garantuotas korektiškas atnaujinimas,
      // tačiau šiame scenarijuje tai nėra būtina
      // setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
    })
    .catch((error) => {
      console.error("Klaida:", error);
      // setMessage('Įvyko klaida trinant vartotoją.');
    });
};

  return (
    <>
      
     
          <tr key={data._id}>

            <td>{data.name}</td>
            <td>{data.last_name}</td>
            <td>{data.party_name}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td>{data.created_at}</td>
            <td>
            <button className="btn btn-danger"
                    onClick={() => handleDelete(data._id)}
            >Ištrinti
            </button> 
            <button>
                  <Link to={`/chairman/edit-user/${data._id}`}
                  className="btn btn-warning"
             >Redaguoti
                    </Link></button> 
            </td>
          </tr>

    </>
  );
};

export default User;