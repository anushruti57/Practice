// import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoStats from './components/TodoStats';
import FilterButtons from './components/FilterButtons';
import TodoItem from './components/TodoItem';

function App() {
const[todos,setTodos] = useState([
  {id:1, text:"Learn React basics", completed:'true'},
  {id:2, text:"Building to app", completed:'false'}
])

const[filter,setFilter]=useState('all');

//Add a new TODO
function addTodo(text){
  const newTodo = {
    id:Date.now(),
    text:text,
    completed:false
  };
  setTodos([...todos,newTodo]);
}

//Toggle todo Completion
function toggleTodo(id){
  setTodos(todos.map(todo=> todo.id === id ? {...todo, completed : !todo.completed}:todo));
}

//delete TODO
function deleteTodo(id){
  setTodos(todos.filter(todo=> todo.id !== id));
}

//filter todo based on urrent filter
function getFilteredTodo(){
  switch(filter){
    case 'active':
      return todos.filter(todo=> !todo.completed);
    case 'completed':
      return todos.filter(todo=>todo.completed);
    default:
      return todos;  
  }
}

const filteredTodos = getFilteredTodo();

  return (
    <div className='min-h-screen bg-gray-100 py-8'>
      <div className='max-w-2xl mx-auto px-4"'>
        <div className='bg-white rounded-xl shadow-lg p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>My React Todo App</h1>
        <AddTodo onAdd={addTodo}/>
        <TodoStats todos={todos}/>
        <FilterButtons filter={filter} onFilterChange={setFilter}/>

        <div className='space-y-2'>
        {filteredTodos.length===0 ? (
          <div className='text-center py-8 text-gray-500'>
            {filter === 'all' ? 'No Todos Yet!': `No ${filter} Todos!`}
          </div>
        ):(
          filteredTodos.map(todo=>(
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}

        </div>

        {todos.length>0 && (
          <div className='mt-6 text-center'>
              <button onClick={()=>setTodos([])}
              className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
              >
                Clear All Todos
              </button>
          </div>
        )}

        </div>
      </div>

    </div>
  );
}

export default App;
