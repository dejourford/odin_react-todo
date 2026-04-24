import "./CreateTaskButton.css"

export function CreateTaskButton({onClick}) {
    
    return (
        <button onClick={onClick} className="create-task-button">+</button>
    )
}