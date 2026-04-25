export function Task({task}) {
    return (
        <div className="task-item">
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.date}</p>
            {task.isComplete ? <input type="checkbox" checked /> : <input type="checkbox" />}
        </div>
    )
}