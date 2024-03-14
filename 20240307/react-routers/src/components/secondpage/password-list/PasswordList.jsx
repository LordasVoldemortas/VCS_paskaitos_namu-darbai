import { useEffect, useState } from "react";

function PasswordList() {

    // const [products, setProducts] = useState([]);
    // const [loading, setLoading]

useEffect(() => {
    let data = localStorage.getItem('data');    
    if(!data) 
     return    
    data = JSON.parse(data);
    PasswordList(data)
}, [PasswordList])
 
 }


export default PasswordList