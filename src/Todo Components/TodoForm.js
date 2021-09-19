import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
    const { formSubmission, id: slNo, name: author, body: todo, handleToggle } = props;

    const [id, setId] = useState(slNo ? slNo : uuidv4());
    const [name, setName] = useState(author ? author : '');
    const [body, setBody] = useState(todo ? todo : '');

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            id: id,
            name: name,
            body: body,
            date: new Date(),
        };
        formSubmission(formData);
        if (handleToggle) {
            handleToggle();
        }
        setId(uuidv4());
        setName('');
        setBody('');
    };

    return (
        <div className='form-floating'>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor=''>Title</label>
                <br />
                <div className='input-group mb-2'>
                    <input
                        type='text'
                        className='form-control shadow bg-body rounded'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <label htmlFor=''>Body</label>
                <br />
                <div className='input-group mb-2'>
                    <textarea
                        className='form-control shadow bg-body rounded'
                        value={body}
                        onChange={e => setBody(e.target.value)}></textarea>
                </div>
                <input className='btn btn-primary shadow rounded' type='submit' value='save' />
            </form>
        </div>
    );
}

export default TodoForm;
