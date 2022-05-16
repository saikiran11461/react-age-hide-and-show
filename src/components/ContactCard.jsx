import React, { useState } from "react";

const ContactCard = (props) =>{
    // console.log(props)
    const [showage , setShowage] =  useState(false)

    const setHandler=()=>{
        setShowage(!showage)
    }
    return (
        <div className='contact-card'>
        <img src={props.avatarurl} 
        alt="profile" />
        <div className='user-details'>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <button onClick={setHandler}>show age</button>
             {showage ?  <p>{props.age}</p> : null }
        </div>
      </div>
    )
}
export default ContactCard