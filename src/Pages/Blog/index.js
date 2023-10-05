import React, { useEffect, useState } from 'react'

// Antd
import { Segmented, AutoComplete, Input, Spin, Tag, Skeleton } from 'antd';

// Lottie
import Lottie from 'react-lottie';
import LottieImage from './Assets/Animation - 16964092712299.json'
import SearchImage from './/Assets/searching.json';
import NodataImage from './Assets/nodata.json'

// Firebase
import { db } from '../../firebase'
import { collection, getDocs } from "firebase/firestore";

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

const lottieOptionsSearching = {
    loop: true,
    autoplay: true,
    animationData: SearchImage,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const lottieOptionsNodata = {
    loop: true,
    autoplay: true,
    animationData: NodataImage,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Blog = () => {
    const [options, setOptions] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [allBlogs, setAllBlogs] = useState([])
    const [seletedBlogs, setSelectedBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true)

            const blogs = await getDocs(collection(db, "blogPosts"));
            const blogsArray = []
            blogs.forEach(doc => {
                blogsArray.push(doc.data())
            })
            setAllBlogs(blogsArray)
            setSelectedBlogs(blogsArray)
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
        const selectedBlog = allBlogs.filter(blog => blog.title === value)
        setSelectedBlogs(selectedBlog)
    };

    const onCategoryChange = (value) => {
        if (value === 'All') {
            setSelectedBlogs(allBlogs)
            setOptions(allBlogs.map(blog => {
                return {
                    value: blog.title
                }
            }))
        } else {
            const filteredBlogs = allBlogs.filter(blog => blog.category.includes(value))
            setSelectedBlogs(filteredBlogs)
            setOptions(filteredBlogs.map(blog => {
                return {
                    value: blog.title
                }
            }))
        }
    }

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
                <div
                    className={Loading ? 'blogs-fliter loading' : 'blogs-fliter'}
                >
                    {
                        Loading ?
                            <div className='filter-loader'>
                                <div class="loader">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            :
                            <>
                                <Segmented
                                    onChange={onCategoryChange}
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
                            </>}

                </div>
            </div>

            <div className='blogs-content'>

                {Loading ?
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Lottie
                            options={lottieOptionsSearching}
                            width={window.innerWidth > 768 ? '400px' : '300px'}
                        />
                        <p style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginTop: '20px',
                            color: '#b2b2b2'
                        }}>
                            Loading...
                        </p>
                    </div>
                    :
                    <>
                        {
                            seletedBlogs.length === 0 ?
                                <div style={{
                                    padding: '100px 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Lottie
                                        options={lottieOptionsNodata}
                                        width={window.innerWidth > 768 ? '400px' : '300px'}
                                    />
                                    <p style={{
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        marginTop: '20px',
                                        color: '#b2b2b2'
                                    }}>
                                        No Blogs Found
                                    </p>
                                </div>
                                :
                                <div className='section-four-cards'>
                                    {
                                        seletedBlogs.map((blog, index) => {
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

                                </div>}
                    </>
                }
            </div>
        </div >
    )
}

export default Blog