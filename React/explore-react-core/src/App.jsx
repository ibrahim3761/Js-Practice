import Counter from './Counter';
import Batsman from './Batsman';
import './App.css'
import Users from './Users';
import ToDo from './Todo'
import Friends from './Friends';
import { Suspense } from 'react';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 

const fetchFriends = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}


function App() {

  const friendsPromise = fetchFriends();

  const time = 50;
  return (
   
    <>
      <h1>React Core Concepts</h1>
{/* 
      <Suspense fallback={<h1>Loading...</h1>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h1>Loading...</h1>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
      <Batsman></Batsman>
      
      {/* <Counter></Counter> */}
      {/* <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="Rahim" tech="JS"></Developer>
      <Developer name="Rakib" tech="python"></Developer>
      <Salami occassion="EID" Amount = "1000000"></Salami> */}
      {/* <ToDo task ="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task ="Revise React" isDone={false}></ToDo> */}
    </>
  )
}

// function Salami({occassion, Amount}) {
//   return (
//     <div className='student'>
//       <h3>Salami for:{occassion}</h3>
//       <p>Amount: {Amount}</p>
//     </div>
//   )
// }

// function Developer({name, tech}) {
//   return (
//     <div style={{
//       backgroundColor: 'blue',
//       color: 'white',
//       border: '1px solid black',
//       borderRadius: '5px',
//       margin: '10px',
//     }}>
//       <p>Name: {name}</p>
//       <p>Technology: {tech} </p>
//     </div>
//   )
// }

// function Student() {
//   return (
//     <div className='student'>
//       <p>Name: </p>
//       <p>Dept: </p>
//     </div>
//   )
// }

// function Person() {
//   const age =23;
//   return (
//     <p>I am a person and my age is {age}</p>
//   )
// }

function Sports(){
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and losing</p>
    </div>
  )
}

export default App
