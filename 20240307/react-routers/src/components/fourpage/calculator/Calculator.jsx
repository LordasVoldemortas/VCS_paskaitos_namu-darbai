import { useState } from "react";

const Calculator = () => {
    const [firstDigit, setFirstDigit] = useState();
    const [secondDigit, setSecondDigit] = useState();
    const [action, setAction] = useState();
    const [result, setResult] = useState();

    const handleClickNumb = (e) => {
        const value = e.target.textContent;
        if (action) {
            // Jeigu veiksmas jau yra pasirinktas, pridedame skaitmenį prie antrojo skaitmens
            setSecondDigit(prevSecondDigit => (prevSecondDigit ? prevSecondDigit + value : value));
        } else {
            // Jeigu veiksmas dar nepasirinktas, pradedame naują pirmąjį skaitmenį
            setFirstDigit(prevFirstDigit => (prevFirstDigit ? prevFirstDigit + value : value));
        }
    }

    const handleClickOperator = (e) => {
        console.log(e.target.textContent)
        setAction(e.target.textContent)
    }

    const handleClickResult = (e) => {
        let result = 0;
    
        if (action === `+`) {
            result = (firstDigit + secondDigit)
        } else if (action === `-`) {
            result = (firstDigit - secondDigit)
        } else if (action === `/`) {
            result = (firstDigit / secondDigit)
        } else {
            result = (firstDigit * secondDigit)
        }
        console.log(result)
    }
    
    return (
        <>
            <div>Pirmas skaicius: {firstDigit}</div>
            <div>Veiksmas: {action}</div>
            <div>antras skaicius: {secondDigit}</div>
            <div>rezultatas: {result}</div>
            <div>
                <button onClick={handleClickNumb}>0</button>
                <button onClick={handleClickNumb}>1</button>
                <button onClick={handleClickNumb}>2</button>
                <button onClick={handleClickNumb}>3</button>
                <button onClick={handleClickNumb}>4</button>
                <button onClick={handleClickNumb}>5</button>
                <button onClick={handleClickNumb}>6</button>
                <button onClick={handleClickNumb}>7</button>
                <button onClick={handleClickNumb}>8</button>
                <button onClick={handleClickNumb}>9</button>
            </div>
            <div>
                <button onClick={handleClickOperator}>+</button>
                <button onClick={handleClickOperator}>-</button>
                <button onClick={handleClickOperator}>/</button>
                <button onClick={handleClickOperator}>*</button>
            </div>
            <div>
                <button onClick={handleClickResult}>Result </button>
                <input type={"number"} />
                
            </div>

        </>
    )
}

export default Calculator

// kitas variantas?
// import { useState } from "react"

// const Calculator = () => {
//     const [value, setValue] = useState("");
//     return (
//         <>
    
//         <div>
//             <button value ="0" onClick ={e => setValue(value + e.target.value )}>0</button>
//             <button value ="1" onClick ={e => setValue(value + e.target.value)}>1</button>
//             <button value ="2" onClick ={e => setValue(value + e.target.value)}>2</button>
//             <button value ="3" onClick ={e => setValue(value + e.target.value )}>3</button>
//             <button value ="4" onClick ={e => setValue(value + e.target.value )}>4</button>
//             <button value ="5" onClick ={e => setValue(value + e.target.value )}>5</button>
//             <button value ="6" onClick ={e => setValue(value + e.target.value )}>6</button>
//             <button value ="7" onClick ={e => setValue(value + e.target.value )}>7</button>
//             <button value ="8" onClick ={e => setValue(value + e.target.value )}>8</button>
//             <button value ="9" onClick ={e => setValue(value + e.target.value )}>9</button>
//          </div>
//          <div>   
//             <button value ="+" onClick ={e => setValue(value + e.target.value )}>+</button>
//             <button value ="-" onClick ={e => setValue(value + e.target.value )}>-</button>
//             <button value ="/" onClick ={e => setValue(value + e.target.value )}>/</button>
//             <button value ="*" onClick ={e => setValue(value + e.target.value )}>*</button>
//             <button onClick ={e => setValue(eval(value))} value="=">=</button>
//         </div>
//         <form>
//             <input type="text" value = {value} />
//         </form>
      
//         </>
//     )
// }
// export default Calculator;