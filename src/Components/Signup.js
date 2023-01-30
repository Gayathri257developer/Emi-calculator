
import React, { useRef } from 'react'
import EMI from './EMI'; 
import './Signup.css'

const Signup = () => {
    const name= useRef();
 
    const getName=localStorage.getItem("nameData")
    
    const handleSubmit = () =>{     
       localStorage.setItem('nameData',name.current.value)
    }
  return (
    <div>
    {
        getName ?
        <EMI/> :
    <form onSubmit={handleSubmit}>
    
    <h2 style={{textTransform: "capitalize"}}>please Enter your Name</h2>
        <div>
            <input 
            className='textfield'
            type="text"
            placeholder="Name"
             ref={name} 
             />
        </div>
      
        <button style={{marginTop: "20px"}}>submit</button>
    </form>
    }
</div>
  )
}

export default Signup