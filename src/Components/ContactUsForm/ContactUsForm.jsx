import React, { useState, useRef } from 'react'
import './ContactUsForm.css'
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {

    const form = useRef();
    const defaultFormField = {
        user_name : '',
        user_email : '',
        user_subject : '',
        message : ''
    }

    const [formValue,setFormValue] = useState(defaultFormField)
    const {user_name,user_email,user_subject,message} = formValue;

    const onChangeHandler = (event) => {
        const {name,value} = event.target;
        console.log({...formValue})
        setFormValue({...formValue,[name]:value})
        // {for (const key in formField){
        //     setFormField({name:value})
        // }}
        console.log('from contact usForm',name,value)
   

    }

    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h49udrr', 'template_x67db9q', form.current, 'QTb7wuoIzRinv075y')
      .then((result) => {
          console.log(result.text);
          console.log('message text');
          setFormValue(defaultFormField)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form' >
      <div>
        <form ref={form} style={{display :'flex', flexDirection : 'column',}} onSubmit={sendEmail}>
            <label className='labels'>Your Name</label>
            <input className='inputFields' type='text' required name='user_name' value={user_name} onChange={onChangeHandler} />
            <label className='labels'>Your Email</label>
            <input className='inputFields' type='email' required name='user_email' value={user_email} onChange={onChangeHandler} />
            <label className='labels'>Subject</label>
            <input className='inputFields'  type='text'  required name='user_subject' value={user_subject} onChange={onChangeHandler} />
            <label className='labels'>Message</label>
            <textarea className='inputFields textbox'  required name='message' type='text' value={message} onChange={onChangeHandler} />
            <button class="btn btn-primary" style={{margin : '10px', width : '20%'}} type="submit" value='Send'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUsForm
