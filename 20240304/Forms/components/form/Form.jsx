const Form = () => {

const handleSubmit = (e) => {
    // CREATE
    // standartinio html formos veikimo sustabdymas
    e.preventDefault();

    const form = new FormData(e.target);
    for(const input of form.entries()){
        console.log(input)
    };
    
    // duomenu persiuntimas i serveri

}

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="mb-3">Formos submitas</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Pavadinimas" 
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Kaina"
                />
            </div>
            <div className="mb-3">
                <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Aprašymas"
                ></textarea>
            </div>
            <button className="btn btn-primary">Išsaugoti</button>
        </form>
    )
}
export default Form;