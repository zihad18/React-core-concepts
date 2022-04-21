import { useEffect, useState } from 'react';
import './App.css';

function App() {
    return ( 
    <div className = "App" >
        
        <header className = "App-header" >

        <Counter></Counter>

        <Counter></Counter>
        <Users></Users>
        {/* <img src = { logo }className = "App-logo" alt = "logo" / > */}
        {/* <p >Edit  done < code > src / App.js </code> and save to reload. {4+9}</p> */}
        {/* <a className = "App-link"  href = "https://reactjs.org" target = "_blank" rel="noopener noreferrer" >Learn React </a>  */}
        {/* <Person name="Rubel nayok"></Person> */}
        {/* <Person name="Sakib Al Hasan"></Person> */}
        </header>
        <p>My first  React Paragraph</p>
        
        </div>
    );
}

function Person(props){
    return (
        <div style={{border:'2px solid  red',width:'400px',backgroundColor:'blue'}}>
                    <h1>Name: {props.name}</h1>
                    <h3>Hero of the year</h3>
        </div>
        
    );
}
function Users()
{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`)
       .then(response => response.json())
       .then(data => {
          setUsers(data);
       })
    },[])
    return (
        <div>
            <h3>dynamic users:{users.length}</h3>
            <ul>
                {users.map(user=><li>{user.title}</li>)}
            </ul>
        </div>
    );
}
function Counter(props)
{
    const [count,setCount]= useState(0);
    const handleIncrease =()=>{
        
        setCount(count+1);
    }
    const  handleDecrease=()=>{
        setCount(count-1);
    }
    return (
        <div>
           <h1> count: {count}</h1>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrese</button>
        </div>

    );
}

export default App;