import { useState } from 'react';

function AddTodo({onAdd}){
    const[text,setText]=useState('');

    function handleSubmit(){
        if(text.trim()){
            onAdd(text.trim());
            setText('');
        }
    }

    function handleKeyPress(e){
        if(e.key==='Enter'){
            handleSubmit();
        }
    }

return(
    <div className='mb-6'>
        <div className='flex space-x-2'>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} 
            onKeyPress={handleKeyPress}
            placeholder='Add a new ToDo...'
            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>

            <button onClick={handleSubmit}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>Add</button>
        </div>
    </div>
);    
}

export default AddTodo;