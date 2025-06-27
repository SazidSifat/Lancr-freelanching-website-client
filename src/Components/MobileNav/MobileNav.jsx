import React from 'react';

const MobileNav = () => {
    return (
        <div className='flex  items-center   justify-end'>
            <button className='py-3 px-8 rounded cursor-pointer  text-red-400 border border-red-400  hover:bg-red-400] hover:text-red-400 '>
                Logout
            </button>
        </div>
    );
};

export default MobileNav;