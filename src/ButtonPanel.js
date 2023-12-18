import './style.css';
import Button from './Button.js';

export default function ButtonPanel({components}) {
    const allButtons = components.map((component, index) => {
        return <Button key={index} behavior={component.behavior}>{component.name}</Button>
    })
    return (
        <div className="button-panel">
            {allButtons}
        </div>
    )
}