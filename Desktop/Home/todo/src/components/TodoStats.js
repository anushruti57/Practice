function TodoStats({todos}){
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const remaining = total-completed;
    return(
        <div className='bg-blue-50 p-4 rounded-lg mb-6'>
            <h3 className='text-lg font-semibold text-blue-800 mb-2'>Statistics</h3>
            <div className='grid grid-cols-3 gap-4 text-center'>
                <div>
                    <div className='text-2xl font-bold text-blue-600'>{total}</div>
                    <div className='text-sm text-blue-600'>Total</div>
                </div>
                <div>
                    <div className='text-2xl font-bold text-blue-600'>{completed}</div>
                    <div className='text-sm text-blue-600'>Completed</div>
                </div>
                <div>
                    <div className='text-2xl font-bold text-blue-600'>{remaining}</div>
                    <div className='text-sm text-blue-600'>Remaining</div>
                </div>
            </div>
        </div>
    )
}
export default TodoStats;