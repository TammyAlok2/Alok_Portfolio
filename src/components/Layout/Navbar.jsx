import React from 'react'

const Navbar = () => {
    return (
        <nav className="p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-center">PP</div>
                    <span className="font-semibold">Portfolio</span>
                </div>

                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-emerald-400">Home</a>
                    <a href="#" className="text-gray-600">About</a>
                    <a href="#" className="text-gray-600">Services</a>
                    <a href="#" className="text-gray-600">Projects</a>
                    <a href="#" className="text-gray-600">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
