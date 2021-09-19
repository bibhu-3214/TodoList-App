import React from 'react';
import TodoContainer from './Todo Components/TodoContainer';
const App = props => {
    return (
        <div className='container-fluid'>
            <h1 className='display-3 text-center mb-5'>Todo Container</h1>
            <div>
                <TodoContainer />
            </div>
        </div>
    );
};

export default App;
