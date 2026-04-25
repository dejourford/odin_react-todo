import "./Task.css"

export function Task({task, onToggle}) {
    
    return (
        <div className="task-item" style={{background: task.isComplete ? "lightgray": "white"}}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.date}</p>
            <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => onToggle(task.id)}
            />
        </div>
    )
}