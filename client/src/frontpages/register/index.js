import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, message } from 'antd'
import axios from 'axios'
import TopBar from '../../components/topBar'
import { Footer } from 'antd/es/layout/layout'
import NavBar from '../../components/navBar'
const Register = () => {

  const navigate = useNavigate()
  const onFinish = async(values) => {
    try {
      if(values.password === values.confirmPassword) {
        axios.post('/api/users/signup', values) 
        .then(function (response) {
          if(response.status === 200){
            message.success(response.data.message)
            navigate('/signin')
          } else {
            message.error(response.data.message)
          }
        })
        .catch(function (error) {
          message.error(error.response.data.message)
        });
          
          
        } else {
          message.error('Passwords do not match') 
        }
      }catch(err) {
        
        message.error('Something went wrong')
      }
  }
  return (
    <>
    <TopBar />
    <NavBar />
    <div className='d-flex align-items-center justify-content-center p-5'>
      <Form layout='vertical' onFinish={onFinish} className='card p-4 w-30'>
        <h1 className='text-center'> Sign Up</h1>
      
        <Form.Item label='Email' name='email'>
          <Input type='email' required />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input type='password' required />
        </Form.Item>
        <Form.Item label='Confirm Password' name='confirmPassword'>
          <Input type='password' required />
        </Form.Item>
        <Link to='/signin' className='m-2'>Already have an account?</Link>
        <button type='submit' className='btn btn-primary'>Register</button>
      </Form>
    </div>
    <Footer />
    </>
  )
}

export default Register