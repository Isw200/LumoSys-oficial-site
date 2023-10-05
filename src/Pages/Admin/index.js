import React, { useEffect, useState } from 'react'

import { Button, Spin } from 'antd';


// Firebase
import { db, doc } from '../../firebase'
import { collection, getDocs, deleteDoc } from "firebase/firestore";

import AddBlog from './AddBlog';
import AddUser from './AddUser';


const Admin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState({})
    const [isAddUserFormOpen, setIsAddUserFormOpen] = useState(false)
    const [isAddBlogFormOpen, setIsAddBlogFormOpen] = useState(false)

    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('lumoadmin-T0a5O7PiekYU'))

        if (user) {
            setUserData(user)
        } else {
            window.location.href = '/admin/login'
        }
    }, [])

    // get all blogs
    useEffect(() => {
        const getBlogs = async () => {
            const blogs = await getDocs(collection(db, "blogPosts"));
            const blogsArray = []
            blogs.forEach(doc => {
                console.log(doc.data())
                blogsArray.push(doc.data())
            })
            setBlogPosts(blogsArray)
        }
        getBlogs()
    }, [])

    const logout = async () => {
        localStorage.removeItem('lumoadmin-T0a5O7PiekYU')
        window.location.href = '/admin/login'
    }

    const deleteBlog = (blogId) => async () => {
        setIsLoading(true)
        try {
            await deleteDoc(doc(db, "blogPosts", blogId));
            alert('Blog deleted successfully')
            setIsLoading(false)
        } catch (error) {
            console.error("Error removing document: ", error);
            setIsLoading(false)
        }
    }


    return (
        <div className='lumo-admin-page'
            style={{
                marginTop: '4em',
                padding: '2em 200px',
            }}
        >
            <h1>Admin Panel</h1>
            <h2>
                Welcome {userData.name}
            </h2>
            <img src={userData.profilePicture} alt={userData.name}
                style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    marginBottom: '1em',
                }}
            />
            <div className='contraolers-row'
                style={{
                    display: 'flex',
                    gap: '1em',
                    marginBottom: '1em',
                }}
            >
                <Button type='primary' danger onClick={logout}>
                    Logout
                </Button>

                <Button type='primary'
                    onClick={
                        () => {
                            setIsAddUserFormOpen(false)
                            setIsAddBlogFormOpen(!isAddBlogFormOpen)
                        }}>
                    Add New Blog
                </Button>

                <Button type='primary'
                    onClick={
                        () => {
                            setIsAddBlogFormOpen(false)
                            setIsAddUserFormOpen(!isAddUserFormOpen)
                        }
                    }>
                    Add New User
                </Button>
            </div>
            <div className='contents'>
                {
                    isAddUserFormOpen ?
                        <AddUser />
                        :
                        isAddBlogFormOpen ?
                            <AddBlog />
                            :
                            <Spin spinning={isLoading}>
                                <div className='blogs-list'>
                                    {
                                        blogPosts.length > 0 &&
                                        blogPosts.map((blog, index) => (
                                            <div className='blog-card'
                                                key={index}
                                                style={{
                                                    display: 'flex',
                                                    gap: '1em',
                                                    marginBottom: '1em',
                                                }}
                                            >
                                                <img src={blog.thumbnailUrl} alt={blog.title} style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    objectFit: 'cover',
                                                    borderRadius: '5px',
                                                }} />
                                                <div className='blog-card-content'
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '1em',
                                                    }}
                                                >
                                                    <h3>{blog.title}</h3>
                                                    <img
                                                        src={blog.userImage}
                                                        alt={blog.username} style={{
                                                            width: '50px',
                                                            height: '50px',
                                                            objectFit: 'cover',
                                                            borderRadius: '50px',
                                                        }} />
                                                    <p>{blog.username}</p>
                                                    <div className='blog-card-actions'>
                                                        <Button
                                                            onClick={deleteBlog(blog.blogId)}
                                                            type='primary' danger>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Spin>
                }
            </div>

        </div>
    )
}

export default Admin