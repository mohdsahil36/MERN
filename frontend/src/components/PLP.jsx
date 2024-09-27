import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {

        // fetching product data from api
        const [data,setData]=useState([]);

            const fetchData = async() => {
                try{
                    const response= await fetch('https://mern-rcda.onrender.com/plp');  //fetching the data api from the local host
                    const jsonData= await response.json();
                    // console.log(jsonData);
    
                    // console.log("Fetch is working!");
                    setData(jsonData);
                }
                catch(error){
                    // console.log("Fetch request failed!");
                    console.error("There is an error:",error);
                }
            }

            useEffect(()=>{
                fetchData();
            },[])


    return (
            <div className='plp-section'>
                <div className='nav-icon'>
                    <div className='cart-icon text-end pt-4 pe-4 pb-4'>
                        <a href="#">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="3.5rem" height="2.25rem" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                                </metadata>
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#fff" stroke="none">
                                    <path d="M2365 5103 c-321 -68 -584 -301 -693 -613 -38 -110 -52 -201 -52
                                -349 l0 -120 -387 -3 c-367 -3 -390 -4 -421 -23 -74 -44 -55 93 -268 -1932
                                -106 -1017 -194 -1877 -194 -1912 0 -62 1 -65 44 -107 l43 -44 2124 0 c2050 0
                                2125 1 2152 19 34 22 56 52 67 92 6 21 -49 582 -185 1882 -107 1019 -197 1868
                                -201 1887 -9 53 -30 86 -71 112 -38 23 -39 23 -424 26 l-386 3 -6 167 c-6 184
                                -21 256 -81 388 -128 276 -392 481 -690 533 -85 15 -288 12 -371 -6z m330
                                -308 c181 -38 349 -168 433 -335 51 -102 72 -202 72 -341 l0 -99 -636 0 -637
                                0 6 133 c4 104 10 149 31 213 42 132 130 252 239 326 155 105 318 139 492 103z
                                m-1075 -1284 c0 -179 1 -190 23 -221 37 -55 71 -74 132 -74 61 0 95 19 133 74
                                21 31 22 42 22 221 l0 189 635 0 635 0 0 -189 c0 -179 1 -190 23 -221 37 -55
                                71 -74 130 -74 58 0 100 20 132 62 18 25 20 45 23 225 l3 197 295 0 c190 0
                                294 -4 294 -10 0 -6 79 -760 175 -1676 96 -916 175 -1675 175 -1685 0 -19 -39
                                -19 -1885 -19 -1501 0 -1885 3 -1885 13 0 6 79 761 175 1677 96 916 175 1673
                                175 1683 0 16 21 17 295 17 l295 0 0 -189z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className='text-center banner'>
                    <p className='quote'>"Any sufficiently advanced technology is indistinguishable from magic"-Arthur C. Clarke</p>
                </div>

                <div className='products'>
                    <h1 className='explore-our-products text-center pt-5'>Explore our products</h1>

                    <div className='container product-categories'>
                        <div className='productrow py-5'>
                            {data.map((item)=>(
                                <Link to={`/pdp/${item._id}`} className='text-decoration-none'>
                                    <div className='product' key={item.id}>
                                        <div className='product-image text-center border border-grey p-2'>
                                            <img src={item.url} alt="mac-air" height='200px' width='200px' className='' />
                                        </div>
                                        <div className='product-info pt-2 p-0 ps-2'>
                                            <p className='product-category'>{item.type}</p>
                                            <h4 className='product-name'>{item.name}</h4>
                                            <p className='product-price'>{item.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='text-center backHome'>
                        <Link to="/" className='text-decoration-none'><p className='mt-3 backHome-btn'>Back to Home</p></Link>
                    </div>

                </div>

                <div className='mt-5 mb-0 copyright bg-dark'>
                    <p className='text-center py-5 mb-0 text-white'>&copy; Designed and developed by Mohd Sahil Siddiqui</p>
                </div>
            </div>
    )
}

export default ProductList
