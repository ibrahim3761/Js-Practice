import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

const bottlesPromise = fetch('./bottles.json').then(res => res.json())

function App() {

  // const bottles = [
  //   {id:1 ,name: 'Bottle 1', price: 10, color: 'green'},
  //   {id:2 ,name: 'Bottle 2', price: 11, color: 'red'},
  //   {id:3 ,name: 'Bottle 3', price: 12, color: 'pink'},
  //   {id:4 ,name: 'Bottle 4', price: 13, color: 'yellow'},
  //   {id:5 ,name: 'Bottle 5', price: 14, color: 'white'},
  // ]

  return (
    <>
      <h1>Buy Awesome Water Bottles</h1>
      <Suspense fallback={<h1>Bottles are Loading...</h1>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
