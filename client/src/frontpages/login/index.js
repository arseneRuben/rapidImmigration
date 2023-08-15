import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input } from 'antd'
const Login = () => {

  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Form layout='vertical' onFinish={onFinish} className='card p-4 w-30'>
        <h1 className='text-center'> Sign In </h1>
     
        <Form.Item label='Email' name='email'>
          <Input type='email' required />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input type='password' required />
        </Form.Item>
      
        <Link to='/signup' className='m-2'>Not yet have an account?</Link>
        <button type='submit' className='btn btn-primary'>Login</button>
      </Form>
    </div>
  )
}

export default Login