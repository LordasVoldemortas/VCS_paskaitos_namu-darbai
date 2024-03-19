import { useState } from "react";

const Imput = () => {
    // state sukurimas
    const [fieldValue, setFieldValue] = useState();
    // evento funkcijos registravimas
    const handleChange = (e) => { //jei norim naudot evento duomenis, (e) BUTINA
        // laukely ivestos reiksmes priskirimas prie states ir komponento atnauujinimas
    setFieldValue(e.target.value)
    }

    return (
    <>
    <h2>Laukelio reiksme</h2>
    <input 
    type="text" 
    onChange={handleChange}
    />
    <div>{fieldValue}</div>
</>
    )
}

export default Imput