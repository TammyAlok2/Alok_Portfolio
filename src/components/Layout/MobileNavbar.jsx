'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoBriefcaseOutline, IoDocumentText, IoHomeOutline, IoInformationCircleOutline, IoMailOutline } from 'react-icons/io5';

const MobileNavbar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg z-50">
            <div className="flex justify-around items-center py-2">
                <NavItem
                    icon={<IoHomeOutline size={20} />}
                    label="Home"
                    isActive={activeTab === 'home'}
                    onClick={() => handleTabChange('home')}
                    href="/"
                />
                <NavItem
                    icon={<IoInformationCircleOutline size={20} />}
                    label="About"
                    isActive={activeTab === 'about'}
                    onClick={() => handleTabChange('about')}
                    href="/#about"
                />
                <AddButton />
                <NavItem
                    icon={<IoBriefcaseOutline size={20} />}
                    label="Services"
                    isActive={activeTab === 'services'}
                    onClick={() => handleTabChange('services')}
                    href="/#services"
                />
                <NavItem
                    icon={<IoMailOutline size={20} />}
                    label="Contact"
                    isActive={activeTab === 'contact'}
                    onClick={() => handleTabChange('contact')}
                    href="/#contact"
                />
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, isActive, onClick, href }) => {
    return (
        <Link href={href} className="flex flex-col items-center" onClick={onClick}>
            <div className={`p-1 ${isActive ? 'text-purple-600' : 'text-gray-500'}`}>
                {icon}
            </div>
            <span className={`text-xs mt-1 ${isActive ? 'text-purple-600' : 'text-gray-500'}`}>
                {label}
            </span>
        </Link>
    );
};

const AddButton = () => {
    return (
        <div className="flex flex-col items-center -mt-6">
            <Link href="/resume">
                <div className="bg-purple-600 rounded-full p-3 text-white shadow-lg">
                    <IoDocumentText size={24} />
                </div>
            </Link>
            <span className="text-xs mt-1 invisible">Resume</span>
        </div>
    );
};

export default MobileNavbar;