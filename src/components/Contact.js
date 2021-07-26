// import  { useState } from 'react'
import React from 'react'


const Contact = () => {
//    const [state,  setState] = useState()
    const handleChange =(e) =>{
        

    }
    const handleSubmit =(e) =>{

    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            name='first'
            placeholder='first'
            onChange={handleChange} /> 

            
            <input
             name='last' placeholder='last'
             onChange={handleChange}  />
            
            
            <button>Submit</button>
        </form>
    )

}

export default Contact
