import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Comp'


function App(props) {
  
  let Ob={
    name:"Amit",
    age:"20"
  }
  let newArr=[1,2,3];
  // console.log("props",props);

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded m-2'>Amit Kumar</h1>
      
    <Comp username="chai aur code" btnText="click me" />
    <Comp username="Amit Kumar" btnText="visit me" />

    
    </>
  )
}

export default App
