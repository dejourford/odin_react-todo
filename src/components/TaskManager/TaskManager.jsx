import { useEffect, useState } from "react";
import { CreateTaskButton } from "../CreateTaskButton/CreateTaskButton";
import { TaskForm } from "../TaskForm/TaskForm";
import { Task } from "../Task/Task";

export function TaskManager() {
    // create showForm state
    const [showForm, setShowForm] = useState(false);

    // state for tasks
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    return (
        <>
            <CreateTaskButton onClick={() => setShowForm(true)} />

            {showForm && (
                <TaskForm initialData={null} onSubmit={(task) => {
                    console.log(task)
                    setTasks(prev => [...prev, {id: crypto.randomUUID(), ...task}])
                    setShowForm(false)
                }} 
                />
            )}

            {tasks.map((task) => 
                <Task key={task.id} task={task} />
            )}

        </>
    )
}