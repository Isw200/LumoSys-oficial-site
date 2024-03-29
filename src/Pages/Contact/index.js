import React, { useState, useEffect } from 'react'

import { PhoneFilled, MailFilled, QuestionCircleOutlined, WhatsAppOutlined, SmileOutlined } from '@ant-design/icons';

import { Spin, notification } from 'antd';



import emailjs from '@emailjs/browser';

import './style.scss'

const SERVICE_ID = "service_kvoadka";
const TEMPLATE_ID = "template_xea2f98";
const PUBLIC_KEY = "OgBxRKmfeOxTA-9N9";


const ContactUs = () => {
    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const activeTab = document.querySelector(".activenav");
        if (activeTab) {
            activeTab.classList.remove("activenav");
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target.user_name.value === '' || e.target.email_id.value === '' || e.target.message.value === '') {
            openErrorNotification()
        } else {
            setLoading(true)
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
                .then((result) => {
                    openNotification()
                    setLoading(false)
                }, (error) => {
                    openErrorNotification()
                    setLoading(false)
                });
        }
    }

    const openNotification = () => {
        api.open({
            message: 'Message Sent Successfully',
            description: "We'll get back to you as soon as possible.",
            icon: (
                <SmileOutlined
                    style={{
                        color: '#108ee9',
                    }}
                />
            ),
        });
    };

    const openErrorNotification = () => {
        api.open({
            message: "Something went wrong!",
            description: "Please try again later.",
            icon: (
                <QuestionCircleOutlined
                    style={{
                        color: '#ff0000',
                    }}
                />
            ),
        });
    };

    return (
        <div className='contact-us-page'>
            {contextHolder}
            <h3 className='title-top'>
                Get in Touch
            </h3>
            <h2 className='title'>
                We are here to help you
            </h2>

            <div className='contact-us-page__form'>
                <div className='form-top'>
                    <h2>
                        Contact Information
                    </h2>
                    <p>
                        Fill up the form and our team will get back to you as soon as possible
                    </p>
                    <div className='contact-info'>
                        <a href='tel:+94702010059'>
                            <PhoneFilled /> +94 702010059
                        </a>
                        <a href='tel:+94771523073'>
                            <PhoneFilled /> +94 771523073
                        </a>
                        <a href='mailto:'>
                            <MailFilled /> lumosystechnologies@gmail.com
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=+94710338328'>
                            <WhatsAppOutlined /> +94 710338328
                        </a>
                    </div>
                </div>

                <Spin spinning={loading} size="large" tip="Sending...">
                    <div className="form">
                        <form
                            onSubmit={sendEmail}
                        >
                            <div className="input">
                                <input
                                    required=""
                                    autocomplete="off"
                                    type="text"
                                    name="user_name"
                                    placeholder=''
                                />
                                <label for="name">Name</label>
                            </div>

                            <div className="input">
                                <input
                                    required=""
                                    autocomplete="off"
                                    name="email_id"
                                    type="text"
                                    placeholder=''
                                />
                                <label for="email">E-mail</label>
                            </div>

                            <div className="input">
                                <textarea
                                    required=""
                                    rows="6"
                                    id="message"
                                    name="message"
                                    placeholder=''
                                ></textarea>
                                <label for="message">Message</label>
                            </div>
                            <div className="btn">
                                <button
                                    type='submit'
                                    className="btn"
                                >Send message →</button>
                            </div>

                        </form>
                    </div>
                </Spin>
            </div>
        </div>
    )
}

export default ContactUs