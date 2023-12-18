import './style.css';

export default function Screen({data, itsOn}) {
    return (
    <input type="text" value={(itsOn ? (data.length > 0? data : "0") : "")} className="screen" disabled={true} />
    )
}