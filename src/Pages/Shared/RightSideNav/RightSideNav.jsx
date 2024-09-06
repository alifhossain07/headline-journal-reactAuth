import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import qZone1 from '../../../../public/assets/images/qZone1.png';
import qZone2 from '../../../../public/assets/images/qZone2.png';
import qZone3 from '../../../../public/assets/images/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
        {/* Login With  */}
            <div>
                <h1 className='text-2xl font-semibold mb-4'>Login with</h1>

                <div className='space-y-4 text-center'>
                <button className="btn hover:bg-sky-200 hover:border-4 hover:border-blue-500 text-blue-600 w-11/12   border-4 border-blue-600">
                <FaGoogle />
              
                Login With Google
                </button>

                <button className="btn hover:bg-gray-300 hover:border-4 hover:border-gray-500 text-gray-600 w-11/12 border-4 border-gray-600">
                <FaGithub />
              
                Login With Github
                </button>
                </div>
            </div>

    {/* Find Us Section */}
            
         <div className='mt-10 mb-10'>
         <h1 className='text-2xl font-semibold mb-4'>Find Us On</h1>

            <div className='space-y-4'>
                <a className='flex mx-auto px-4 py-2 border-4 text-xl border-blue-700 rounded-2xl w-11/12 items-center gap-2' href="">
                <FaFacebook className='text-blue-500'/>
                <span>Facebook</span>
                </a>
                
                
                <a className='flex mx-auto px-4 py-2 border-4 text-xl border-pink-300 rounded-2xl w-11/12 items-center gap-2' href="">
                <BsInstagram className='text-pink-500'/>
                <span>Instagram</span>
                </a>
                
                
                <a className='flex mx-auto px-4 py-2 border-4 text-xl border-sky-400 rounded-2xl w-11/12 items-center gap-2' href="">
                <BsTwitter className='text-sky-500'/>
                <span>Twitter</span>
                </a> 
            </div>

         </div>

         {/* Q zone */}
         <div>
                <h1 className='text-2xl font-semibold mb-4'>Q - Zone</h1>

                <div className='flex flex-col'>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               

                </div>

                
                
        </div>

        {/* amazing newspaper */}

        <div className='border text-center border-green-600 text-white p-14 space-y-10 bg-amazingNews'>

            <h1 className='text-3xl font-bold'>Create an Amazing Newspaper</h1>
            <p className='text-lg font-medium'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='btn btn-warning'>Learn More</button>




        </div>



        </div>
    );
};

export default RightSideNav;