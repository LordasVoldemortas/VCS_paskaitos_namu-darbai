import logoimg from '../../../../public/vite.svg'
const Intro = () => {
    return(
    <div className="intropage">
       <div>
            <h3>Vite</h3>
            <h3>Next Generation Frontend Tooling</h3>
            <p>Get ready for a development environment that can finally catch up with you</p>
            <button>btn</button> <button>btn</button><button>btn</button> <button>btn</button>
        </div>
        <div>
            <img className='bigimg' src={logoimg} />
        </div>
    </div>
    )
}

export default Intro