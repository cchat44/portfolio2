import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import {contactConfig } from './layout/'

export default function contact() {
  return <>
<Container>
  <Row className="mb-5 mt-3">
    <Col lg='8'>
      <h1 className='display-4 mb-4'>
      CONTACT ME, LET'S WORK!!!</h1>
    </Col>
    <Col Lg='7' className='d-flex align-items-center'>
    <form className='contact__form w-100'>
      <Row>

  <Col lg='6' classname='form-group'>
    <input 
    className='form-control'
    id='name'
    name='name'
    placeholder='Name'
    type='text'
    />
  </Col>
  <Col lg='6' classname='form-group'>
    <input 
    className='form-control rounded-0'
    id='email'
    name='email'
    placeholder='Email'
    type='email'
    />
  </Col>
  
   <textarea className='form-control rounded-0' id='message'
   name='message'
   placeholder='Message'
   rows='4'>
</textarea>
        </Row>
      </form>
    </Col>
  </Row>
</Container>

{/* <p>
Cory Chatman </p>
<p>Software Engineer 
Atlanta, GA | 678-789-9582 | chatmancoryr@gmail.com | linkedin.com/in/cory-chatman-0ba885252/ </p>



    <div>CONTACT ME, LET'S WORK!!!!</div>
<section>
  <div>
    <form class='contactForm'>
      

    </form>
  </div>
</section> */}
  </>
}
