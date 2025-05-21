
import React from 'react';
import logo from '../../assets/images/Logo maker project.png'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <div className="footer sm:footer-horizontal  text-base-content p-10 container mx-auto">
                <aside>
                    <img src={logo} alt="" className='w-9 md:w-12 ' />
                    <h1 className='text-2xl md:text-4xl font-bold'>Lancr<span className='text-primary'>.</span></h1>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav >
                    <h6 className="footer-title">Social</h6>

                    <div className='flex items-center justify-center  gap-2'>
                        <a href='facebook'><FaFacebook size={30} /></a>
                        <a href=''><FaInstagram size={30} /> </a>
                        <a href=''><FaYoutube size={30} /></a>
                    </div>
                </nav>

            </div>
            <div className='bg-primary'>
                <div className="footer sm:footer-horizontal  text-neutral-content  p-4  flex items-center justify-center">
                    <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;