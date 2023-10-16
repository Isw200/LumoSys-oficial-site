import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Button, Form, Spin, Upload, message, Input, Select } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

// Firebase
// firebase
import { db, storage } from '../../firebase'
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Quill
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css';
import TextArea from 'antd/es/input/TextArea';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);


const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["formula"],
        [{ size: ["small", false, "large", "huge"] }],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
    },
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    }
};

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

const AddBlog = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState({})
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

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('lumoadmin-T0a5O7PiekYU'))

        if (user) {
            setUserData(user)
        } else {
            window.location.href = '/admin/login'
        }
    }, [])

    const handleOverviewOk = (values) => {
        addPost(values)
    }

    const addPost = async (values) => {
        setIsLoading(true)
        const blogId = uuidv4()
        const { title, category, overview, discription } = values
        const thumbnail = fileList[0]?.originFileObj;

        try {
            const storageRef = ref(storage, `thumbnails/${blogId}/thumbnail`);
            const uploadTask = uploadBytesResumable(storageRef, thumbnail);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log("File available at", downloadURL);

                        const username = userData.name
                        const userImage = userData.profilePicture
                        const email = userData.email
                        const createdAt = new Date().toISOString()
                        const updatedAt = new Date().toISOString()
                        const thumbnailUrl = downloadURL

                        const blog = {
                            blogId,
                            title,
                            discription,
                            category,
                            thumbnailUrl,
                            overview,
                            username,
                            userImage,
                            email,
                            createdAt,
                            updatedAt,
                        };

                        await setDoc(doc(db, "blogPosts", blogId), blog);

                        setIsLoading(false)
                        alert('Blog added successfully')

                    });
                }
            );
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }


    }

    return (
        <div>
            <Spin
                spinning={isLoading}
                tip="Loading..."
            >
                <Form
                    layout='vertical'
                    onFinish={handleOverviewOk}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input title!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Discription"
                        name="discription"
                        rules={[
                            {
                                required: true,
                                message: 'Please input title!',
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: 'Please input category!',
                            },
                        ]}
                    >
                        <Select
                            mode="tags"
                            style={{
                                width: '100%',
                            }}
                            placeholder="Tags Mode"
                            options={[
                                {
                                    label: 'Development',
                                    value: 'Development',
                                },
                                {
                                    label: 'Cloud & DevOps',
                                    value: 'Cloud & DevOps',
                                },
                                {
                                    label: 'Technologies',
                                    value: 'Technologies',
                                },
                                {
                                    label: 'Tech News',
                                    value: 'Tech News',
                                },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Thumbnail"
                        name="thumbnail"
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


                    <Form.Item
                        label="Overview"
                        name="overview"
                        rules={[
                            {
                                required: true,
                                message: 'Please input overview!',
                            },
                        ]}
                        style={{
                            height: '90vh'
                        }}
                    >
                        <ReactQuill
                            modules={modules}
                            theme="snow"
                            placeholder="The content starts here..."
                            style={{
                                height: '80vh'
                            }}
                        />
                    </Form.Item>

                    <Form.Item >
                        <Button
                            type="primary"
                            htmlType="submit">
                            Add Blog
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>
        </div>
    )
}

export default AddBlog