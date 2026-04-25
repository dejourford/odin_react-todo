import "./Task.css"

export function Task({task, onToggle}) {
    
    return (
        <div className="task-item">
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