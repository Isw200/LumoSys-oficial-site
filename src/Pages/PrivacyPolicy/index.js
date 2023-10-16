import React, { useEffect } from 'react'

import './style.scss'

const PrivacyPolicy = () => {

    useEffect(() => {
        const activeTab = document.querySelector(".activenav");
        if (activeTab) {
            activeTab.classList.remove("activenav");
        }
        const currentTab = document.getElementById("navhome");
        if (currentTab) {
            currentTab.classList.add("activenav");
        }
    }, []);

    return (
        <div className='privacy-policy'>
            <div className='privacy-policy-top'>
                <h1>
                    Privacy Policy
                </h1>
                <h2>
                    Privacy Policy for Lumosys Technologies (Pvt) Ltd
                </h2>
            </div>

            <div className='privacy-policy-content'>
                <h2>
                    Last updated: October 8, 2023
                </h2>
                <p>
                    Lumosys Technologies is committed to protecting your privacy. This privacy policy explains how we collect, use, and share your personal information when you visit our website or use our services.
                </p>
                <h3>
                    Information we collect
                </h3>
                <p>
                    We collect the following types of information from you:
                </p>

                <ul>
                    <li>
                        Contact information: This may include your name, email address, phone number, and mailing address.
                    </li>
                    <li>
                        Usage information: This may include information about how you use our website and services, such as the pages you visit, the features you use, and the links you click on.
                    </li>
                    <li>
                        Device information: This may include information about your computer or mobile device, such as your IP address, operating system, and browser type.
                    </li>
                </ul>
                <h3>
                    How we use your information
                </h3>
                <p>
                    We use the information we collect to:
                </p>
                <ul>
                    <li>
                        Provide and improve our website and services.
                    </li>
                    <li>
                        Communicate with you about our website and services.
                    </li>
                    <li>
                        Send you promotional emails, if you have opted in to receive them.
                    </li>
                    <li>
                        Analyze website traffic and user behavior.
                    </li>
                    <li>
                        Protect our website and services from fraud and abuse.
                    </li>
                </ul>
                <h3>
                    How we share your information
                </h3>
                <p>
                    We do not share your personal information with any third parties without your consent. However, we may share your personal information with third-party service providers who help us operate our website and services, such as web hosting providers, email marketing providers, and analytics providers. These third-party service providers are contractually obligated to keep your personal information confidential and to use it only for the purposes of providing services to us.
                </p>
                <h3>
                    Your choices
                </h3>
                <p>
                    You have the following choices regarding your personal information:
                </p>
                <ul>
                    <li>
                        You can choose to opt out of receiving promotional emails from us by clicking on the unsubscribe link in any promotional email we send you.
                    </li>
                    <li>
                        You can request access to your personal information or request that we delete your personal information by contacting us at <a
                            href='mailto:lumosystechnologies@gmail.com'
                        >
                            lumosystechnologies@gmail.com
                        </a>
                    </li>
                </ul>
                <h3>
                    Data security
                </h3>
                <p>
                    We take steps to protect your personal information from unauthorized access, use, or disclosure. However, no method of data transmission or storage is completely secure. Therefore, we cannot guarantee the absolute security of your personal information.
                </p>
                <h3>
                    Changes to this privacy policy
                </h3>
                <p>
                    We may update this privacy policy from time to time. If we make any significant changes, we will post a notice on our website or send you an email notification.
                </p>
                <h3>
                    Contact us
                </h3>
                <p>
                    If you have any questions or concerns about this privacy policy, please contact us at <a
                        href='mailto:lumosystechnologies@gmail.com'
                    >
                        lumosystechnologies@gmail.com
                    </a>
                </p>
                <h3>
                    Additional information for California residents
                </h3>
                <p>
                    Under the California Consumer Privacy Act (CCPA), California residents have the right to request access to their personal information, request that their personal information be deleted, and opt out of the sale of their personal information. To exercise these rights, please contact us at <a
                        href='mailto:lumosystechnologies@gmail.com'
                    >
                        lumosystechnologies@gmail.com
                    </a>
                </p>
                <h3>
                    Additional information for EU residents
                </h3>
                <p>
                    Under the General Data Protection Regulation (GDPR), EU residents have the right to request access to their personal information, request that their personal information be deleted, and restrict the processing of their personal information. To exercise these rights, please contact us at <a
                        href='mailto:lumosystechnologies@gmail.com'
                    >
                        lumosystechnologies@gmail.com
                    </a>
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy