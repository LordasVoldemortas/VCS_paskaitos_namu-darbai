import { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0); //pripliusavimui reikalinga useState(0) reiksme nulis skliaustuose

    const handleClick = (e) => {
        // naujos reiksmes priskyrimas
        // pirmas budas 
        setCount(count + 1)
        //  antras budas
        //  setCount(prev => prev + 1)
    }
    return (
        <>
            <h2>Mygtuko paspaudimai</h2>
            <div>Rezultatas: {count} </div>
            <button
                onClick={handleClick}
            >
                paspausk
            </button>
        </>
    );
}

export default Button;