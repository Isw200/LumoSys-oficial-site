import React, { useEffect } from 'react'

import './style.scss'

const Products = () => {
    useEffect(() => {
        const activeTab = document.querySelector(".activenav");
        if (activeTab) {
            activeTab.classList.remove("activenav");
        }
        const currentTab = document.getElementById("navproducts");
        if (currentTab) {
            currentTab.classList.add("activenav");
        }
    }, []);

    return (
        <div className='our-products'>
            <div className='products-top'>
                <div className='products-top-left'>
                    <h1>Our Products</h1>
                    <h2>
                        We provide the best quality products for you.
                    </h2>
                    <p>Our products are made with the best quality materials and are available in a variety of colors and sizes. Custom orders are available upon request. Please contact us for more information.
                    </p>

                    <div className='products-top-left-buttons'>
                        <button
                            onClick={() => {
                                document.getElementById('product').scrollIntoView({ behavior: 'smooth' })
                            }}
                        >Learn More</button>
                    </div>
                </div>
                <div className='products-top-right'>
                    <img src={require('./Assets/amico.webp')} alt=''></img>
                </div>
            </div>

            <div className='products-bottom' id="product">
                <div className='products-bottom-product'>
                    <div className='product-image'>
                    </div>
                    <div className='products-bottom-product-info'>
                        <h3>Lumo<span>Learn</span></h3>
                        <h2>
                            Your Path to Teaching Excellence Starts Here.
                        </h2>
                        <p>
                            Elevate education with our feature-packed LMS, designed to simplify teaching, enhance learning, and empower educators and students alike.
                        </p>
                        <a href='/products/lumolearn'>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products