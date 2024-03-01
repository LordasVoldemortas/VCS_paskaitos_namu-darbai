import './Button.css'

// komponentas = funkcija
// porpsas = parametras
const Button = (props) => {
    return (
        <button className={props.style}> 
       {props.showIcon && <span>🎉</span>} 
       {props.text}
       {props.children}
        </button>
    )
}

export default Button;

// kitas variantas su props

// const Button = ({}) => {
//     const {style, showIcon, text, children} = props
//     return (
//         <button className={style}> 
//        {showIcon && <span>🎉</span>} 
//        {text}
//        {children}
//         </button>
//     )
// }

// export default Button;

// kitas variantas su props

// const Button = ({style, showIcon, text, children}) => {
//     return (
//         <button className={style}> 
//        {showIcon && <span>🎉</span>} 
//        {text}
//        {children}
//         </button>
//     )
// }

// export default Button;