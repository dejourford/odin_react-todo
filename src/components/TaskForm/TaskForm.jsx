import { useState, useEffect } from "react"
import "./TaskForm.css"

export function TaskForm({ initialData, onSubmit }) {
    const [title, setTitle] = useState(initialData?.title || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [date, setDate] = useState(initialData?.date || "");
    const [isComplete, setIsComplete] = useState(initialData?.isComplete || false);

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!")

        onSubmit({
            title,
            description,
            date, 
            isComplete
        });
    }

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "");
            setDescription(initialData.description || "");
            setDate(initialData.date || "");
            setIsComplete(initialData.isComplete || false);
        } else {
            setTitle("");
            setDescription("");
            setDate("");
            setIsComplete(false);
        }
    }, [initialData]);

    return (

        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                {/* Title */}
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-group">
                {/* Description */}
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="form-group">
                {/* Date */}
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="form-group">
                {/* isComplete */}
                <label htmlFor="checkbox">Complete?</label>
                <input
                    type="checkbox"
                    name="isComplete"
                    value={isComplete}
                    onChange={(e) => setIsComplete(e.target.checked)}
                />

            </div>

            <button type="submit" className="submit-button">Submit</button>
        </form>


    )
}