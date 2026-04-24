import { useState } from "react";
import { CreateTaskButton } from "../CreateTaskButton/CreateTaskButton";
import { TaskForm } from "../TaskForm/TaskForm";

export function TaskManager() {
    // create showForm state
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <CreateTaskButton onClick={() => setShowForm(true)} />

            {showForm && (
                <TaskForm initialData={null} />
            )}
        </>
    )
}