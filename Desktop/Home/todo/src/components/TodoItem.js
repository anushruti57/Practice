function TodoItem({todo,onToggle,onDelete}){
    return(
        <div className='flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200 mb-2'>
            <div className='flex items-center space-x-3'>
                <input type='checkbox' checked={todo.completed}
                onChange={()=>onToggle(todo.id)}
                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                />
                <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {todo.text}
                </span>
            </div>
            <button onClick={()=>onDelete(todo.id)}
            className='px-3 py-1 text-red-600 hover:bg-red-50 rounded-md transition-colors'>
            Delete
            </button>
        </div>
    )
}
export default TodoItem;