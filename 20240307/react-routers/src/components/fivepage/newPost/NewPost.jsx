
const NewPost = ({ setReload }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for(const [key, value] of formData.entries()) {
            data[key] = value;
        }
        // data[0] = index[1];

        const localData = localStorage.getItem('data')
        if(localData) {
            // papildymas
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData)
        } else {
            // sukurimas
            localStorage.setItem('data', JSON.stringify([data]))
        }

        setReload((prev) => !prev)
    }
    
    return (
        <div className="newPosts">
          <h3 className="fw-bold">New Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex align-items-center flex-column">
                    <label>Post Title</label>
                    <input 
                        type="text"
                        className="form-control rounded-pill border border-2"
                        name="title"
                        required={true}
                    />
                </div>
                <div className="mb-3 d-flex align-items-center flex-column">
                    <label>Post Category</label>
                    <input 
                        type="text"
                        className="form-control rounded-pill border border-2"
                        name="category"
                        required={true}
                    />
                </div>
                <div className="mb-3 d-flex align-items-center flex-column">
                    <label>Post Image</label>
                    <input 
                        type="text"
                        className="form-control rounded-pill border border-2"
                        name="photo"
                        required={true}
                    />
                </div>
                <div className="mb-3 d-flex align-items-center flex-column">
                    <label>Post Content</label>
                    <input 
                        type="text"
                        className="form-control rounded-pill border border-2"
                        name="content"
                        required={true}
                    />
                </div>
                <div className="mb-3 d-flex align-items-center flex-column">
                    <label>Post Author</label>
                    <input 
                        type="text"
                        className="form-control rounded-pill border border-2"
                        name="author"
                        required={true}
                    />
                </div>
                <div className="mb-3 d-flex align-items-center flex-column">
                    <label>Post Author Role</label>
                    <input 
                        type="text"
                        className="form-control rounded-pill border border-2"
                        name="authorRole"
                        required={true}
                    />
                </div>
                <div className="mb-3 d-flex align-items-center flex-column">
                    <label>Post Author Image</label>
                    <input 
                        type="text"
                        className="form-control rounded-pill border border-2"
                        name="authorPhoto"
                        required={true}
                    />
                </div> 
                <button className="btn btn-warning rounded-pill text-white">SUBMIT</button>
            </form>
        </div>
    )
}

export default NewPost


