import { Button, Form, Input, message } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { EMAIL_REGEX } from '../../util/constant'

import fb from '../../assets/fb.png'
import gg from '../../assets/gg.png'

import './Login.scss'

const Login = () => {
  const { loginGoogle, loginFacebook, login, user } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onFinish = () => {
    setError('')
    try {
      login(email, password)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleLoginFb = () => {
    try {
      loginFacebook()
    } catch (error) {}
  }

  const handleLoginGg = () => {
    try {
      loginGoogle()
    } catch (error) {}
  }

  useEffect(() => {
    if (user !== null) {
      navigate('/dasboard')
    }
  }, [user])

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form name="login-form" form={form} onFinish={onFinish}>
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                pattern: new RegExp(EMAIL_REGEX),
                message: 'Please provide a valid email address',
              },
            ]}>
            <Input
              placeholder="Username"
              className="input-height"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}>
            <Input.Password
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              LOGIN
            </Button>
          </Form.Item>
          <p>
            Do not have an account <Link to="/register">Register</Link>
          </p>
          <div className="group_sso">
            <div className="fb" onClick={() => handleLoginFb()}>
              <img src={fb} alt="gg" className="icon-fb" />
            </div>
            <div className="gg" onClick={() => handleLoginGg()}>
              <img src={gg} alt="gg" className="icon-gg" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
