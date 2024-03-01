import { useState } from "react"

const AlternativeButton = () => {
    const [count, setCount] = useState(0)
    
    return(
<>
<h2>mygtuko paspaudimas kitaip</h2>

    <div>Rezultatas yra: {count}</div>
    <button onClick={() => setCount(count +1)}>Paspausk mane</button> 
{/* butinai turi buti onClick pradzia {()} */}
</>
    )
}

export default AlternativeButton