import { useState } from 'react'
import React from 'react'
import ContactCard from './components/ContactCard'
import "./App.css"

function App() {
  const contacts = [
    {avatarurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD-85JUzyxhkFGaXLjrFMnWNayaRu9OQLKA&usqp=CAU",
     name:"pinky",
     email:"pinky@gmail.com",
     age:"9112233440"
  },
  {avatarurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7shPfGOlIjzTUcVskomX24oNL6ZeBVs1iw&usqp=CAU",
  name:"srikanth",
  email:"srikanth@gmail.com",
  age:"56789305543"
  },
  {avatarurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kL7atCwX2mYetj7lstIZBbmxSzfsImuFsw&usqp=CAU",
   name:"merry",
   email:"merry@gmail.com",
   age:"8687799343"
},
{avatarurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1mz-ClZxbNEiX4VwNZM32vD35SPXHrUMkQ&usqp=CAU",
name:"angle",
email:"angel@gmail.com",
age:"238306349234"
}
  ];


fetch('https://randomuser.me/api/?results=5')
.then(responce=>responce.json())
.then(data=>console.log(data))

  return (
  <div className='maindiv'>
    {contacts.map((contact,index)=>{
        return (
          <ContactCard
          key={index}
          avatarurl={contact.avatarurl}
          name ={contact.name}
          email={contact.email}
          age={contact.age}
          />
        )
    })}

  </div>
  )
}

export default App
