function FilterButtons({filter, onFilterChange}){
    const filters = [
        {key:'all',label:"All"},
        {key:'active',label:"Active"},
        {key:'completed',label:'Completed'}
    ];
    return(
        <div className='flex space-x-2 mb-4'>
            {filters.map(({key,label})=>(
                <button
                key={key}
                onClick={()=>onFilterChange(key)} 
                className={`px-4 py-2 rounded-lg transition-colors ${
                    filter===key ? 'bg-blue-600 text-white' 
                    :'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}>
                {label}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;