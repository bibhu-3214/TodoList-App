import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(res);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addItem = todo => {
        const result = [todo, ...todos];
        setTodos(result);
    };

    const removeItem = id => {
        const remove = todos.filter(todo => {
            return todo.id !== id;
        });
        setTodos(remove);
    };

    const editItem = todo => {
        const result = todos.map(t => {
            if (t.id === todo.id) {
                return { ...t, ...todo };
            } else {
                return { ...t };
            }
        });
        setTodos(result);
    };

    return (
        <div className='container'>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-6'>
                        <h4>TodoContainer</h4>
                    </div>
                    <div className='col'>
                        <h4>Add your Todos</h4>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row gx-5'>
                    <div className='col'>
                        <div className='p-4 border bg-light'>
                            <TodoList todos={todos} removeItem={removeItem} editItem={editItem} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='p-4 border bg-light'>
                            <AddTodo addItem={addItem} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;
