import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// Antd
import { Button, Tag, message } from 'antd';

// Firebase
import { db, doc } from '../../firebase'
import { onSnapshot } from "firebase/firestore";

// Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

// Lottie
import Lottie from 'react-lottie';
import LottieImage from './Assets/animation_lnc7dz1b.json'

// Reveal
import AOS from 'aos';
import 'aos/dist/aos.css';

import moment from 'moment';

import './BlogPage.scss'

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieImage,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

AOS.init();
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 800,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});


const BlogPage = () => {
    const [blogData, setBlogData] = useState()
    const blogId = useParams()
    const [messageApi, contextHolder] = message.useMessage();

    const coppied = () => {
        messageApi.open({
            type: 'success',
            content: 'Copied to clipboard!',
        });
    };


    useEffect(() => {
        const getBlogs = async () => {
            try {
                const blog = doc(db, 'blogPosts', blogId.blogId)
                onSnapshot(blog, (doc) => {
                    if (doc.exists()) {
                        console.log(doc.data())
                        setBlogData(doc.data())
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        getBlogs()
    }, [])

    return (
        <div className='blog'>
            {contextHolder}
            {
                blogData ?
                    <div className='blog-data'>
                        <div className='blog-top'>
                            <div className='blog-top-left'
                            >
                                <div className='category' data-aos="fade-up">
                                    {
                                        blogData.category.map((category, index) => {
                                            return (
                                                <Tag
                                                    color={
                                                        category === 'Development' ? 'blue' :
                                                            category === 'Cloud & DevOps' ? 'green' :
                                                                category === 'Technologies' ? 'orange' :
                                                                    category === 'Tech News' ? 'red' : 'blue'
                                                    }
                                                    key={index}>
                                                    {category}
                                                </Tag>
                                            )
                                        })
                                    }
                                </div>
                                <h1 data-aos="fade-up">{blogData.title}</h1>
                                <p data-aos="fade-up">{blogData.discription}</p>

                                <div className='blog-top-left-bottom' data-aos="fade-up">
                                    <div className='author'>
                                        <div className='author-image'>
                                            <img src={blogData.userImage} alt="" />
                                        </div>
                                        <div className='name'>
                                            <h2>{blogData.username}</h2>
                                            <p>
                                                {blogData.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='details'>
                                        <p>{moment(blogData.createdAt).format('MMMM Do YYYY')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='blog-top-right' data-aos="zoom-in">
                                <img src={blogData.thumbnailUrl} alt="" />
                            </div>
                        </div>
                        <div className='blog-bottom'>
                            <ReactQuill
                                className='quill'
                                readOnly
                                theme="bubble"
                                value={blogData.overview}
                            />
                        </div>

                        <div className='thanks'>
                            <h1><span>Thanks</span> for reading!</h1>
                            <p>
                                If you enjoyed this article or found it helpful, give it a few claps to help others find it!
                            </p>
                            <div className='share'>
                                <p>Share on</p>
                                <div className='share-right'>
                                    <Button
                                        style={{
                                            backgroundColor: '#1DA1F2',
                                        }}
                                        type='primary'
                                        onClick={() => {
                                            window.open(`https://twitter.com/intent/tweet?text=${blogData.title}&url=https://blog-5d3b5.web.app/blog/${blogData.blogId}&hashtags=blog`)
                                        }}
                                    >
                                        Twitter
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: '#4267B2',
                                        }}
                                        type='primary'
                                        onClick={() => {
                                            window.open(`https://www.facebook.com/sharer/sharer.php?u=https://blog-5d3b5.web.app/blog/${blogData.blogId}`)
                                        }}
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: '#2867B2',
                                        }}
                                        type='primary'
                                        onClick={() => {
                                            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=https://blog-5d3b5.web.app/blog/${blogData.blogId}&title=${blogData.title}&summary=${blogData.discription}&source=https://blog-5d3b5.web.app/blog/${blogData.blogId}`)
                                        }}
                                    >
                                        LinkedIn
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: '#595959',
                                        }}
                                        type='primary'
                                        onClick={() => {
                                            navigator.clipboard.writeText(`https://blog-5d3b5.web.app/blog/${blogData.blogId}`)
                                            coppied()
                                        }}
                                    >
                                        Copy Link
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='blog-loading'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh'
                        }}
                    >
                        <div style={{
                            width: '200px'
                        }}>
                            <Lottie
                                options={lottieOptions}
                                width="100%"
                            />
                        </div>
                    </div>
            }
        </div>
    )
}

export default BlogPage