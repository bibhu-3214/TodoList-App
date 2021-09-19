import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    const { todos, removeItem, editItem } = props;
    return (
        <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            {todos.length === 0 ? (
                <div>
                    <h4>No Todos found...</h4>
                    <h5>Add your first Todos !</h5>
                </div>
            ) : (
                <div>
                    <div>
                        <h3>My Todo ({todos.length})</h3>
                    </div>
                    <div>
                        {todos.map(todo => {
                            return <TodoItem key={todo.id} {...todo} removeItem={removeItem} editItem={editItem} />;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoList;
