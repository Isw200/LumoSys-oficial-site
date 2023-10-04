import React, { useEffect, useState } from 'react'

import { Button, Checkbox, Form, Input, Spin } from 'antd';

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, doc, db } from '../../firebase'
import { onSnapshot } from "firebase/firestore";

const Login = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('lumoadmin-T0a5O7PiekYU'))
        if (user) {
            window.location.href = '/admin'
        }
    }, [])

    const onFinish = (values) => {
        login(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const login = async (values) => {
        setLoading(true)
        const { email, password } = values;

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                const user = doc(db, 'users', res.user.uid)
                onSnapshot(user, (doc) => {
                    if (doc.exists()) {
                        if (doc.data().role === 'admin') {
                            localStorage.setItem('lumoadmin-T0a5O7PiekYU', JSON.stringify(doc.data()))
                            window.location.href = '/admin'
                            setLoading(false)
                        } else {
                            alert('You are not an admin')
                            setLoading(false)
                        }
                    }
                })
            }

        } catch (error) {
            alert(error.message)
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Spin
                spinning={loading}
                tip="Loading..."
                size="large"
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>
        </div >
    )
}

export default Login