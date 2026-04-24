import { useState } from "react"

export function TaskForm() {
    const [title, setTitle] = useState("");
    
    return (
        <form>
            <input 
            type="text" 
            name="title" 
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            />
        </form>
    )
}