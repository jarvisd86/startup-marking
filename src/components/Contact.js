 import  { useState } from 'react'
import { ImportsNotUsedAsValues, setConstantValue } from 'typescript'

const Contact = () => {
  const [input, setInput] = useState({
    name: ''

  })
    const handleChange =(e) =>{
       let {name , value} = e.target 
       setInput({
           ...input,
           [name]: value,
       });


            
        
        



    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        // let { name } = input

    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            name='first'
            type='text'
            placeholder='first'
            onChange={handleChange}
            value={input.name}
            required
            /> 

            
            <input
             name='last'
              placeholder='last'
             onChange={handleChange} 
              value={input.name}
              required />

            
            
            <button type='submit'>Submit</button>
        </form>
    )

}

export default Contact
