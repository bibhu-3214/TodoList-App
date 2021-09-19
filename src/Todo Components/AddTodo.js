import React from 'react';
import TodoForm from './TodoForm';

function AddTodo(props) {
    const { addItem } = props;

    const formSubmission = formData => {
        addItem(formData);
    };

    return (
        <div>
            <h3>My TodoForm</h3>
            <TodoForm formSubmission={formSubmission} />
        </div>
    );
}

export default AddTodo;
