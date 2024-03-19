import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [form, setForm] = useState({});
    const [loader, setLoader] = useState(false);

    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();
    // Reikšmės patalpintos url adrese paėmimas 
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        //Vartotoju duomenu paemimas
        fetch('http://localhost:3000/users/' + id)
        .then(resp => resp.json())
        // Duomenu priskyrimas prie state`o
        .then(resp => {
            console.log(resp);
            setForm(resp)
        });
    }, [loader]);
    
     // Formos duomenų įrašymas
     const handleSubmit = (e) => {
        e.preventDefault();
        //Vartotojo issaugojimas
        fetch('http://localhost:3000/users/' + id,  {
            method: 'PUT',
            body: new FormData(e.target)
        })
            .then(resp => resp.text)
            .then(resp => {
                console.log(resp)
                // Peradresavimo iniciavimas
                navigate('/admin');
                setLoader(!loader)
            })
        }
    return (
        <>
            <h1>informacijos redagavimas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.name}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Pavarde</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="last_name"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.last_name}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                        defaultValue={form.photo}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.email}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Slaptazodis</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.password}
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default EditProduct;