import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext()

export const TodoContextProvider = ({ children }) => {
    const [title, setTitle] = useState("");
    const [editTask, setEditTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:4000/tasks');
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchTasks();
    }, [title]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const tasks = { title }

        // Add task to the database
        const response = await fetch('http://localhost:4000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tasks)
        })
        if (!response.ok) {
            console.log(response.error)
        }
        setTitle("")
    }
    const toggleComplete = async (id, complete) => {
        const data = await fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ complete:!complete }),
        });
        if (!data.ok) {
            throw new Error('Failed to toggle task complete');
        }

        const updateTasks = tasks.map((task) => {
            if (task._id === id) {
                return {...task, complete:!complete };
            }
            return task;
        });
        setTasks(updateTasks);
    }
    const deleteTask = async (id) => {
        const data = await fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        if (!data.ok) {
            throw new Error('Failed to delete task');
        }
        const deleteTask = tasks.filter((task) => task._id !== id)
        setTasks(deleteTask);
    }
    const editClick = (title) => {
        setEditTask({ ...title });
    }

    const editedTask = async (id, editTask) => {
        const taskEdited = tasks.map((task) => task._id === id ? editTask : task)
        console.log(taskEdited)
        const data = await fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskEdited)
        })
        if (!data.ok) {
            throw new Error('Failed to edit task');
        }
    }
    const handleEdit = async (e) => {
        e.preventDefault();
        editedTask(editTask._id,editTask)
    }
    return (
        <TodosContext.Provider
            value={{
                title,
                setTitle,
                handleSubmit,
                tasks,
                toggleComplete,
                deleteTask,
                error,
                setError,
                editTask,
                editClick,
                handleEdit,
                setEditTask
            }}>
            {children}
        </TodosContext.Provider>
    )
}