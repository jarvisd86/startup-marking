import React from 'react'


const Contact = () => {
   
    const handleChange =() =>{

    }
    const handleSubmit =() =>{

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
