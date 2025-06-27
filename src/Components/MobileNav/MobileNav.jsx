import React from 'react';
import Theme from '../Theme/Theme';

const MobileNav = () => {
    return (
        <div className='flex  items-center px-6 lg:px-0  justify-end'>
            <Theme/>
            <button className='py-3 px-8 rounded cursor-pointer  text-red-400 border border-red-400  hover:bg-red-400] hover:text-red-400 '>
                Logout
            </button>
        </div>
    );
};

export default MobileNav;