import React, { useEffect, useState } from 'react'

// Antd
import { Segmented, AutoComplete, Input, Spin, Image, Tag } from 'antd';

// Lottie
import Lottie from 'react-lottie';
import LottieImage from './Assets/Animation - 16964092712299.json'

// Firebase
import { db, doc } from '../../firebase'
import { collection, getDocs, deleteDoc } from "firebase/firestore";

import moment from 'moment';

import './blogs.scss'

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieImage,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Blog = () => {
    const [options, setOptions] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true)

            const blogs = await getDocs(collection(db, "blogPosts"));
            const blogsArray = []
            blogs.forEach(doc => {
                console.log(doc.data())
                blogsArray.push(doc.data())
            })
            setAllBlogs(blogsArray)
            setOptions(blogsArray.map(blog => {
                return {
                    value: blog.title
                }
            }
            ))

            setLoading(false)
        }
        getBlogs()
    }, [])

    const handleSearch = (value) => {
        if (value === 'v5£E*<9o*5;280;m"YKyzX"wXPW~4sqYrq') {
            window.location.href = '/admin'
        }
    };
    const onSelect = (value) => {
        console.log('onSelect', value);
    };

    return (
        <div className='blogs-page'>
            <div className='blogs-hero'>
                <div className='blogs-hero-left' data-aos="fade-up">
                    <h1>
                        <span>LumoBlogs</span>
                        <br />
                        Illuminating the tech world, one post at a time.
                    </h1>
                    <p>
                        Dive into our blog, where we illuminate the latest tech trends, share industry insights, and showcase our innovative solutions at Lumosys Technologies.
                    </p>
                </div>

                <div className='blogs-hero-right' data-aos="zoom-in">
                    <Lottie
                        options={lottieOptions}
                        width="100%"
                    />
                </div>
                <div className='blogs-fliter' data-aos="zoom-in">
                    <Segmented
                        size='large'
                        options={['All', 'Development', 'Cloud & DevOps', 'Technologies', 'Tech News']}
                    />
                    <AutoComplete
                        popupMatchSelectWidth={252}
                        style={{
                            width: 300,
                        }}
                        options={options}
                        onSelect={onSelect}
                        onSearch={handleSearch}
                        size="large"
                    >
                        <Input.Search size="large" placeholder="Search here..." enterButton />
                    </AutoComplete>

                </div>
            </div>

            <div className='blogs-content'>
                <Spin spinning={Loading}>

                    <div className='section-four-cards'>
                        {
                            allBlogs.map((blog, index) => {
                                if (blog.discription.length > 200) {
                                    blog.discription = blog.discription.slice(0, 120) + '...'
                                }
                                return (
                                    <div className='card' >
                                        <div className='card-image img3'>
                                            <img src={blog.thumbnailUrl} alt='card-img ' />
                                        </div>
                                        <div className='card-content'>
                                            <div className='tags'>
                                                {
                                                    blog.category.map((category, index) => (
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
                                                    ))
                                                }
                                            </div>
                                            <h1>
                                                {blog.title}
                                            </h1>
                                            <p>
                                                {blog.discription}
                                                <a
                                                    href={`/blog/${blog.blogId}`}
                                                    target='_blank'
                                                    rel="noreferrer"
                                                >
                                                    Read More...
                                                </a>
                                            </p>
                                        </div>
                                        <div className='card-more'>
                                            <div className='card-author'>
                                                <img src={blog.userImage} alt='profile-img' />
                                                <div className='author-name'>
                                                    <div className='author-name-main'>
                                                        <p>{blog.username}</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-date'>
                                                <p>{
                                                    moment(blog.createdAt).format('MMMM Do YYYY')
                                                }</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </Spin>
            </div>
        </div>
    )
}

export default Blog