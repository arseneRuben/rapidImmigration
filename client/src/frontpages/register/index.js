import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input } from 'antd'
const Register = () => {

  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Form layout='vertical' onFinish={onFinish} className='card p-4 w-30'>
        <h1 className='text-center'> Sign Up</h1>
        <Form.Item label='Username' name='username'>
          <Input type='text' required />
        </Form.Item>
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
  )
}

export default Register