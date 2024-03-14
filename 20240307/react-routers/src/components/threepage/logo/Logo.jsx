import logoimg from '../../../../public/vite.svg'

function Logo() {
    return (
        <div className="logo">
                <img src={logoimg}/>
                <h3> Vite</h3>
        </div>
    );
}

export default Logo;