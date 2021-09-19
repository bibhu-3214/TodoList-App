import React from 'react';
import TodoForm from './TodoForm';

function EditTodo(props) {
    const { id, name, body, editItem, handleToggle } = props;

    const formSubmission = formData => {
        editItem(formData);
    };

    return (
        <div>
            <TodoForm
                id={id}
                name={name}
                body={body}
                formSubmission={formSubmission}
                editItem={editItem}
                handleToggle={handleToggle}
            />
        </div>
    );
}

export default EditTodo;
