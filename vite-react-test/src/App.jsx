//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react"
import { PersonsForm } from "./components/PersonForm"
import { PersonsInfo } from "./components/PersonsInfo"

let initialPersons = []

//let loaded = false
await fetch('http://localhost:3000/persons.json',{mode:'cors'}).then(async promise=>{
  const data = await promise.json()
  console.log(data)
  initialPersons = data
  //setPersons(data)
})


const Landing = ()=>{
  let [persons,setPersons] = useState(initialPersons)

  //if(loaded!==true){
    //let data
    //if(loaded==-1){
     // loaded = true
    //}else{
      //fetch('http://localhost:3000/persons.json',{mode:'cors'}).then(async promise=>{
        //const data = await promise.json()
        //console.log(data)
        //persons = data
        //setPersons(data)
      //})
      //loaded = -1
    //}
  //}

  const onAddPerson = (data)=>{
    data.key = crypto.randomUUID()
    const newPersons = [...persons,data]
    console.log(newPersons)
    setPersons(newPersons)
  }

  return (
    <>
      <h1>Lista kontaktów</h1>
      <PersonsForm onAddPerson={onAddPerson}/>
      {persons.map(person=>{
        return <PersonsInfo 
          key={person.key}
          name={person.name}
          phone={person.phone}
          city={person.city}
        ></PersonsInfo>
      })}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!<a href="/home">Test</a></div>,
  },
  {
    path: "/home",
    element: <Landing/>,
  },
]);

function App() {
  return <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
}

export default App
