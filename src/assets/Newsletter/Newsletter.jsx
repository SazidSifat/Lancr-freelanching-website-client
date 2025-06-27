import React from 'react';

const Newsletter = () => {
    return (
        <div className=" bg-primary max-w-6xl  mx-auto   py-20 px-6 md:px-16 rounded-xl">
            <div className=" text-center space-y-6 ">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-content">
                    Subscribe to Our Newsletter
                </h2>
                <p className=" text-lg text-primary-content">
                    Get the latest tasks, freelance tips, and feature updates delivered straight to your inbox.
                </p>

                <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="input input-bordered w-full max-w-md"
                    />
                    <button type="submit" className="btn btn-secondary px-8">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
