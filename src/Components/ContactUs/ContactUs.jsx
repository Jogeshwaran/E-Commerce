import {React,useState} from 'react'
import ContactUsForm from '../ContactUsForm/ContactUsForm'

const ContactUs = () => {
    
  return (
    <div style={{
        display : 'flex',
        flexDirection : 'row', 
    }}>
        <div style={{width : '30%', padding : '50px'}}>
       <h1>Contact Us </h1>

       <h6 style={{paddingTop : '10px'}}>Address</h6>
       <address style={{paddingLeft : '15px'}}>
       Mannan Crackers,<br></br>
       abcd road<br></br>
       Tirupur-000000<br></br>
       TamilNadu<br></br>
       India
       </address>
        
        <h6> Contact </h6>
        <p style={{paddingLeft : '15px'}}>9876543210</p>
        </div>

        <div  style={{width : '70%'}}>
      <ContactUsForm />
        </div>
      
    </div>
  )
}

export default ContactUs
