import { useState } from "react"

export default function Todo() {

    const [todos, setTodos] = useState(0);

    const inc = () => {
        setTodos((c) => c + 1);
    }
    return (
        <>
            <div>
                <button onClick={inc}>clicked {todos} times</button>
            </div>
        </>
    )
}