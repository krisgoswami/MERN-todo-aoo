import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';


const BASE_URL = 'http://localhost:8080/api/v1/todo'

const TodoList = () => {


    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const { data } = await axios.get(`${BASE_URL}/allTodos`);
        setTodos(data);
        console.log(data);
    };

    const addTodo = async () => {
        const { data } = await axios.post(`${BASE_URL}/addTodo`, {
            todo: newTodo,
            completed: false,
        });
        setTodos((prevTodos) => [...prevTodos, data]);
        setNewTodo('');
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        console.log(id);
        await axios.delete(`${BASE_URL}/deleteTodo/${id}`);
        setTodos(todos.filter((todo) => todo.id !== id));
        fetchTodos();
    };

    const updateTodo = async (id, newText) => {
        const response = await axios.put(`${BASE_URL}/updateTodo/${id}`, {
            id,
            todo: newText,
        });
        setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
        fetchTodos();
    };

    const toggleComplete = async (id) => {
        const updatedTodoIndex = todos.findIndex((todo) => todo._id === id);

        if (updatedTodoIndex !== -1) {
            const updatedTodo = { ...todos[updatedTodoIndex] };
            updatedTodo.completed = !updatedTodo.completed;

            await axios.put(`${BASE_URL}/updateTodo/${id}`, updatedTodo);

            setTodos((prevTodos) => {
                const newTodos = [...prevTodos];
                newTodos[updatedTodoIndex] = updatedTodo;
                return newTodos;
            });

            // Alternatively, you can directly fetch the updated todos
            fetchTodos();
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
            <h1 className='font-bold text-3xl text-center mb-5'>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder='Add a task...'
                className="border border-gray-300 p-2 w-full mb-4"
            />
            <button
                onClick={addTodo}
                className="bg-blue-500 w-full text-white p-2 rounded mr-2 mb-10"
            >
                Add Todo
            </button>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo._id}
                        className={`bg-white rounded-lg flex items-center justify-between border p-2 mb-2 ${todo.completed ? 'line-through text-gray-500 bg-gray-200' : ''
                            }`}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo._id)}
                            className="mr-2"
                        />
                        {todo.todo}
                        <div>
                            <button
                                onClick={() => deleteTodo(todo._id)}
                                className="bg-red-500 text-white p-2 rounded mr-2"
                            >
                                <RiDeleteBin6Line />
                            </button>
                            <button
                                onClick={() => {
                                    const newText = prompt('Update this task:', todo.todo);
                                    if (newText !== null) {
                                        updateTodo(todo._id, newText);
                                    }
                                }}
                                className="bg-green-500 text-white p-2 rounded"
                            >
                                <RiEdit2Line />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
