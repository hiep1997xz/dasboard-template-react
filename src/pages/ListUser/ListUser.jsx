import { Button, Col, Input, message, Row, Table, Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './ListUser.scss'

const { Title } = Typography

const ListUser = () => {
  const [addData, setAllData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3004/users`).then((res) => {
      setAllData(res.data)
    })
  }, [])

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Review',
      dataIndex: 'review',
    },
    {
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <>
            <Button
              type="primary"
              onClick={() => navigate(`/form?id=${record.key}`)}>
              Edit
            </Button>
            <Button type="danger" onClick={() => handleDelete(record)}>
              Delete
            </Button>
          </>
        )
      },
    },
  ]

  const data = [{}]

  addData.map((user) => {
    data.push({
      key: user.id,
      username: user.username,
      email: user.email,
      gender: user.gender,
      review: user.review + '%',
    })
  })

  const handleDelete = (value) => {
    axios
      .delete(`http://localhost:3004/users/${value.key}`)
      .then((res) => {
        window.location.reload()
        console.log(res)
        message.success('Deleted User Successfully!')
      })
      .catch((err) => {
        message.error(err)
      })
  }

  const handleClick = () => {
    navigate('/form')
  }

  return (
    <>
      <div className="container_all">
        <div className="body_listUser">
          <Row gutter={[40, 0]}>
            <Col span={18}>
              <Title level={2}>User List</Title>
            </Col>
            <Col span={6}>
              <Button onClick={handleClick} block>
                Add User
              </Button>
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} bordered />
        </div>
      </div>
    </>
  )
}

export default ListUser
