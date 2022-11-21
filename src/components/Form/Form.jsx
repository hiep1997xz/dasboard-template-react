import {
  Button,
  Col,
  Form,
  Input,
  message,
  Radio,
  Row,
  Select,
  Slider,
  Switch,
  Typography,
} from 'antd'
import { useForm } from 'antd/lib/form/Form'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const FormInput = () => {
  const [loading, setLoading] = useState(false)
  const [form] = useForm()
  const [getData, setGetData] = useState([])
  const navigate = useNavigate()
  const params = window.location.search
  const splitParmaUrl = params.split('?id=')

  useEffect(() => {
    axios
      .get(`http://localhost:3004/users?id=${splitParmaUrl[1]}`)
      .then((res) => {
        setGetData(res.data)
      })
  }, [])

  const detailData = () => {
    let payload = {
      id: getData[0]?.id ? getData[0]?.id : '',
      username: getData[0]?.username ? getData[0]?.username : '',
      email: getData[0]?.email ? getData[0]?.email : '',
      gender: getData[0]?.gender ? getData[0]?.gender : '',
      hobbies: getData[0]?.hobbies ? getData[0]?.hobbies : '',
      review: getData[0]?.review ? getData[0]?.review : '',
      notificaiton: getData[0]?.notificaiton ? getData[0]?.notificaiton : '',
    }
    form.setFieldsValue(payload)
  }

  useEffect(() => {
    detailData()
  }, [getData])

  const handleSubmit = (values) => {
    if (!params) {
      setLoading(true)
      axios
        .post(`http://localhost:3004/users`, values)
        .then((res) => {
          setLoading(false)
          message.success('User Added Successfully!')
          navigate('/list-user')
        })
        .catch((err) => {
          setLoading(false)
          message.error(err)
        })
    } else {
      setLoading(true)
      axios
        .put(`http://localhost:3004/users/${getData[0]?.id}`, values)
        .then((res) => {
          setLoading(false)
          message.success('User Updated Successfully!')
          navigate('/list-user')
        })
        .catch((err) => {
          setLoading(false)
          message.error(err)
        })
    }
  }

  return (
    <div className="container_all">
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: 'center' }} level={2}>
            Please Fill the User Form
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} name="form" form={form} onFinish={handleSubmit}>
            <Form.Item
              name="username"
              label="UserName"
              rules={[
                {
                  required: true,
                  message: 'Please input your name',
                },
              ]}>
              <Input placeholder="Please Enter your username" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your correct email',
                  type: 'email',
                },
              ]}>
              <Input placeholder="Please Enter your email" />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please select your gender',
                },
              ]}>
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="others">Others</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="hobbies"
              label="Hobbies"
              rules={[
                {
                  required: true,
                  message: 'Please select your hobbies',
                  type: 'array',
                },
              ]}>
              <Select mode="multiple" placeholder="Please select you hobbies">
                <Select.Option value="Reading">Reading</Select.Option>
                <Select.Option value="Writing">Writing</Select.Option>
                <Select.Option value="Coding">Coding</Select.Option>
                <Select.Option value="Singing">Singing</Select.Option>
                <Select.Option value="Dancing">Dancing</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="review" label="Review">
              <Slider />
            </Form.Item>
            <Form.Item
              name="notificaiton"
              label="Notificaiton"
              valuePropName="checked">
              <Switch />
            </Form.Item>
            <div style={{ textAlign: 'right' }}>
              <Button type="primary" loading={loading} htmlType="submit">
                Save
              </Button>
              <Button
                type="danger"
                htmlType="button"
                onClick={() => navigate('/list-user')}>
                Back
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default FormInput
