import './style.css';


export default function Button({children, behavior}) {
    return (
        <button className="custom-button" onClick={()=>{behavior()}}>{children}</button>
    )
}