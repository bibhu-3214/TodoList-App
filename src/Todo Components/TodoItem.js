import React, { useState } from 'react';
import EditTodo from './EditTodo';

function TodoItem(props) {
    const { id, name, body, removeItem, editItem } = props;
    const [toggle, setToggle] = useState(false);

    const handleRemove = () => {
        const confirmRemove = window.confirm('are you sure');
        if (confirmRemove) {
            removeItem(id);
        }
    };

    const handleToggle = () => {
        const result = !toggle;
        setToggle(result);
    };

    return (
        <div>
            {toggle ? (
                <div className='container-fluid border p-3 mb-3'>
                    <EditTodo id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle} />
                    <button type='button' className='btn btn-danger btn-sm mt-2 mb-2' onClick={handleToggle}>
                        cancel
                    </button>
                </div>
            ) : (
                <div className='border p-3 shadow bg-body rounded bg-white mb-3'>
                    <div>
                        <h6>{name}</h6>
                        <p>{body}</p>
                    </div>
                    <div className='d-grid gap-2 d-md-block'>
                        <button type='button' className='btn btn-success btn-sm me-md-1' onClick={handleToggle}>
                            edit
                        </button>
                        <button type='button' className='btn btn-danger btn-sm me-md-1' onClick={handleRemove}>
                            remove
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoItem;
