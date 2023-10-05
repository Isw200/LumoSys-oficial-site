import React, { useState } from 'react'

import { Button, message, Form, Input, Spin, Upload, Select } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

// Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from '../../firebase'
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const AddUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [fileList, setFileList] = useState([]);

    const onChange = ({ fileList: newFileList }) => {
        if (fileList.length > 0) {
            newFileList.shift();
        }
        const fileType = newFileList[0]?.type;

        if (fileType !== "image/png" && fileType !== "image/jpg" && fileType !== "image/jpeg") {
            alert("Only PNG, JPG, JPEG files are allowed");
            return;
        } else if (newFileList[0]?.size / 1024 / 1024 > 2) {
            alert("File size must be less than 2MB");
            return;
        }

        setFileList(newFileList);
    };

    const onFinish = (values) => {
        addUser(values)
    }

    const addUser = async (values) => {
        const { name, email, password } = values;
        const profilePicture = fileList[0]?.originFileObj;

        setIsLoading(true)

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            if (response) {
                const uid = response.user.uid;
                const storageRef = ref(storage, `users/${uid}/profile`);
                const uploadTask = uploadBytesResumable(storageRef, profilePicture);

                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    (error) => {
                        console.log(error)
                        setIsLoading(false)
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);

                            const user = {
                                uid,
                                name,
                                email,
                                profilePicture: downloadURL,
                                role: 'admin'
                            }

                            setDoc(doc(db, "users", uid), user)
                                .then(() => {
                                    alert('User added successfully')
                                    setIsLoading(false)
                                })
                                .catch((error) => {
                                    console.error("Error adding document: ", error);
                                    setIsLoading(false)
                                });
                        });
                    }
                );

            }

        } catch (error) {

        }
    }

    return (
        <div>
            <h1>
                Add User
            </h1>

            <div className='add-user-form'>
                <Spin
                    spinning={isLoading}
                    tip="Loading..."
                >
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Email!',
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
                                    message: 'Please input Password!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Profile Picture"
                            name="profilePicture"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input category!',
                                },
                            ]}
                        >
                            <Upload
                                {...props}
                                onChange={onChange}
                                beforeUpload={() => false}
                            >
                                <Button icon={<UploadOutlined />}>
                                    Click to Upload
                                </Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item >
                            <Button
                                type="primary"
                                htmlType="submit">
                                Add User
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </div>
    )
}

export default AddUser