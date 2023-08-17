import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, message } from 'antd'
import axios from 'axios'
const Login = () => {

  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const res = await axios.post('/api/users/signin', values)
      if(res.data.success) {
        localStorage.setItem('token', res.data.token)
        message.success('Login success')
        navigate('/')
      }else {
        message.error(res.data.message)
      }
     
    } catch (error) {
      console.log(error)
    }
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