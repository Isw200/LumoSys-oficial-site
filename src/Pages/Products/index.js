import React from 'react'

import './style.scss'

const Products = () => {
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
                    <img src={require('./Assets/amico.png')} alt=''></img>
                </div>
            </div>

            <div className='products-bottom' id="product">
                <div className='products-bottom-product'>
                    <div className='product-image'>
                    </div>
                    <div className='products-bottom-product-info'>
                        <h3>Lumo<span>Learn</span></h3>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui.
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