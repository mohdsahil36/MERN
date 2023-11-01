import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDescription(){

    const {item_id}= useParams();
    const productId= item_id;
    
    //sending data
    // const sendData =(event)=>{
    //     fetch('http://localhost:8000/pdp/'+productId,{
    //         method:'GET',
    //         body: JSON.stringify(this.state)
    //     })
    //     event.preventDefault();
    // }

    //fetching specific product data for mapping

    const [finddata,findsetData]=useState([]);

    const specificResponse = async() => {
        try{
            const newresponse= await fetch('http://localhost:8000/pdp/'+productId);  //fetching the data api from the local host
            const newjsonData= await newresponse.json();
            // console.log("This is the data fetched from api",newjsonData);

            // console.log("Fetch is working!");
            findsetData(newjsonData);
        }
        catch(error){
            // console.log("Fetch request failed!");
            console.error("There is an error:",error);
        }
    }

    useEffect(()=>{
        specificResponse();
    },[])

    return(
        <div className='pdp-page'>
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

            <div className='container description-section'>
                <div className=''>
                    {finddata.map((newvalues)=>(

                        <div className='row'>
                            <div className='col-sm-12 col-md-6 product-image'>
                                <img src={newvalues.url} alt="item-image" />
                            </div>

                            <div className='col-sm-12 col-md-6 m-auto product-information'>
                                <div className='data'>
                                    <p className='product-title'>{newvalues.name}</p>
                                    <p className='product-price'>{newvalues.price}</p>
                                    <p className='product-decription'>{newvalues.desc}</p>
                                </div>
                            </div>
                        </div>                        

                    ))}
                </div>
            </div>

            <div className='container-fluid back-links'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 backtoHome'>
                        <Link to="/" className='text-decoration-none'><p className='mt-3 backHome-btn'>Back to Home</p></Link>
                    </div>
                    <div className='col-sm-12 col-md-6 backtoPLP'>
                        <Link to="/plp" className='text-decoration-none'><p className='mt-3 backHome-btn'>Back to Products</p></Link>
                    </div>
                </div>
            </div>

            <div className='copyright bg-dark'>
                <p className='text-center py-5 mb-0 text-white'>&copy; Designed and developed by Mohd Sahil Siddiqui</p>
            </div>
        </div>
    )
}

export default ProductDescription