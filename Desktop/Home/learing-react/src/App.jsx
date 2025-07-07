import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton1 from './component/MyButton1'



function MyButton(){
  return(
    <button>I'm Button.</button>
  )
}

function Aboutpage(){
  return(
    <>
      <h1>About</h1>
      <p>Hello there.<br/>How Are you?</p>
    </>
  )
}

const user = {
  name : "John Doe",
  imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgFNtNDQ-0fZBkG4UfFly0tdN3B8Ay_rYlnCq8F5glVPYSSAQR2VKPRUh5nIzepOzPxw&usqp=CAU"
}
function Profile(){
  return(
    <div> 
      <h1>{user.name}</h1>
      <img src = {user.imageUrl} alt = "Profile"  className='image'/>
    </div>
  )
}


const products = [
  {title:"Apple",id:1},
  {title:"Banana",id:2},
  {title:"Cherry",id:3}
]

function ShoppingList(){
  const listItems = products.map(products=>
    <li key = {products.id}>
     {products.title}
    </li>
  );

  return <ul>{listItems}</ul>
}

function EveHandler(){
  function handleClick(){
    alert('Button Clicked!');
  }

  return(
    <button onClick = {handleClick}>
      Click Me!
    </button>
  );
}

function Counter(){
  const [count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
return(
  <button onClick={handleClick}>
    Clicked {count} times!
  </button>
)

}

function Greeting({name}){
    return <h1>Hello, {name}!</h1>
  }

function App() { 
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
   <>
     <h1>My App</h1>
     {/* <MyButton/>
     <Aboutpage/> */}
     {/* <Profile/> */}
     {/* <ShoppingList/> */}
     {/* <EveHandler/> */}
     {/* <Counter/> */}
     {/* <Greeting name = "Alice"/>
      <Greeting name = "Bob"/> */}

     <h1>Counter does not update together</h1> 
    <Counter/> 
    <Counter/> <br/>
    <h1>Counter that update together</h1>
    <MyButton1 count={count} onClick={handleClick}/>
    <MyButton1 count={count} onClick={handleClick}/>
   </>
  )

  
}

export default App
