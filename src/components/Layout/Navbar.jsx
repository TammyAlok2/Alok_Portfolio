import React from 'react'

const Navbar = () => {
    return (
        <nav className="p-6">
            <div className="max-w-[80%] mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#dbeafe] rounded-full flex items-center text-indigo-600 font-bold justify-center text-center">PP</div>
                    <span className="font-semibold">Portfolio</span>
                </div>

                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-emerald-400">Home</a>
                    <a href="#about" className="text-gray-600">About</a>
                    <a href="#services" className="text-gray-600">Services</a>
                    <a href="#projects" className="text-gray-600">Projects</a>
                    <a href="#skills" className="text-gray-600">Skills</a>
                    <a href="#contact" className="text-gray-600">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
