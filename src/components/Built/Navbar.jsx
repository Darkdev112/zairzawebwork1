import React from 'react'

const Navbar = () => {
    return (
        <header className="text-cyan-100 body-font bg-teal-600 rounded-lg">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-cyan-100 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" className="mr-5 hover:text-lime-500">First Link</a>
                    <a href="/" className="mr-5 hover:text-lime-500">Second Link</a>
                    <a href="/" className="mr-5 hover:text-lime-500">Third Link</a>
                    <a href="/" className="mr-5 hover:text-lime-500">Fourth Link</a>
                </nav>
                <button className="inline-flex items-center bg-lime-500 border-0 py-1 px-3 focus:outline-none hover:bg-lime-400 rounded text-base mt-4 md:mt-0">Button
                </button>
            </div>
        </header>
    )
}

export default Navbar