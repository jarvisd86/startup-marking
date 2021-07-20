import React from 'react'

const ContactForm = () => {
    return (
        <form>
            <input 
            name='first'
            placeholder='first'/> 

            <input
             name='last'
              placeholder='last'/>
            
            
            <button>Submit</button>
        </form>
    )
}

export default ContactForm
