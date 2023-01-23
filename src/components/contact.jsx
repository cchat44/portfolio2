import React from 'react';
import emailjs from 'emailjs-com';
import {Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  
  function sendEmail(e) {
    e.preventDefault();

    const form = document.getElementById('my-form');
    console.log(form)


    emailjs.sendForm('service_5os72ft', 'template_mqpxpx9',form, '349XTg8YjTI6HBqCK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };

return <>
  
      <div className='container'>
        <form id='my-form' onSubmit={(e) => sendEmail(e)}>
        
       <center> <Container>
<Row className="mb-5 mt-3">
  <Col lg='8'>
    <h2 className='display-4 mb-4'>
    CONTACT ME, LET'S COLLABORATE!!!</h2>
  </Col>
  <Col Lg='7' className='d-flex align-items-center'>
    <Row>
  <Col lg='7' className='form-group'>
    <input 
    className='form-control'
    id='subject'
    name='subject'
    placeholder='Subject'
    type='text'
    cols='30'
    rows='10'
    />
  </Col>
<Col lg='6' className='form-group'>
  <input 
  className='form-control'
  id='name'
  name='name'
  placeholder='Your Name'
  type='text'
  />
  
</Col>
<Col lg='6' className='form-group'>
  <input 
  className='form-control rounded-0'
  id='email'
  name='email'
  placeholder='Your Email'
  type='email'
  />
</Col>

 <input className='container2' id='message'
 name='message'
 placeholder='message'
 >
</input>
<br>
</br>
<button onClick={sendEmail}> SEND EMAIL </button>
      </Row>
  </Col>
</Row>
</Container> </center>
</form>
      </div>


</>
}
