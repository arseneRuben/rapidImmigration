import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, message } from 'antd'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { hideLoading, showLoading } from '../../redux/features/alertSlice'

import FrontPages from '..'


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post('http://localhost:8080/api/users/signin', values)
     
      dispatch(hideLoading())
      
      if(res.data.success) {
        localStorage.setItem('token', res.data.token) 
        message.success('Login success')
        if(res.data.access_level === 'client') {
           navigate('/')
        }
        else{
           navigate('/profile')
        }
      }else {
        message.error(res.data.message)
      }
     
    } catch (error) {
      dispatch(hideLoading())
      //console.log(error)
      message.error(error.message)
    }
  }
  return (
    <>
    <FrontPages>
    <div className='d-flex align-items-center justify-content-center bg-light p-5'>
      <Form layout='vertical' onFinish={onFinish} className='card p-4 w-30'>
        <h1 className='text-center'> Sign In </h1>
     
        <Form.Item label='Email' name='email'>
          <Input type='email' required />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input type='password' required />
        </Form.Item>
      
        <Link to='/signup' className='m-2 text-danger'>Not yet have an account?</Link>
        <button type='submit' className='btn btn-danger'>Login</button>
      </Form>
    </div>
    </FrontPages>
    </>
  )
}

export default Login