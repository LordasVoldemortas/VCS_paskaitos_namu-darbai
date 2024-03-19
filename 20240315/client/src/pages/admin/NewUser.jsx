import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewProduct = () => {
    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();

    // Produkto formos submitas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Formos duomenų persiuntimas POST metodu
        fetch('http://localhost:3000/users/new', {
            method: 'POST',
            body: new FormData(e.target),
        })
        .then(resp => resp.text())
        .then(resp => {
            console.log(resp);
            // Peradresavimo iniciavimas
            navigate('/admin');
        });
    }

    return (
        <>
            <h1>Naujas Vartotojas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Pavardė</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="last_name"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                    /> 
                </div>
                <div className="mb-3">
                    <label>El. pašto adresas</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Slaptažodis</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default NewProduct;