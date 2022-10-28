import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
    <div class="wid h-28 bg-black">
        <div class=" h-full flex flex-col justify-center items-center text-white">
            <div>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>f</span></button>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>t</span></button>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>G</span></button>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>in</span></button>
                
                
            </div>
            
            
        </div>

       
    </div>
    <p class="text-white bg-black text-center">Copyright-2022@letslearn.com</p>
                    </footer>
            
        </div>
    );
};

export default Footer;