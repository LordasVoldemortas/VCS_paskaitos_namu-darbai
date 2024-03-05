import { useState } from "react"
const value = 0
const Quantity = () => {
    
    const [qty, setCount] = useState(0)
    const handleClickplus = (e) => {
        if (qty < 100) 
        setCount(qty + 1)
    }
const handleClickminus = (e) => {
    if (qty > 0)
    setCount(qty - 1)
}
    return(
        <>
        <button onClick={handleClickplus}>
            <i className="bi bi-plus-square"></i>
        </button>
        <div>{qty}</div>
        <button onClick={handleClickminus}>
            <i className="bi bi-dash-square"></i>
        </button>
        </>
    )
}

export default Quantity