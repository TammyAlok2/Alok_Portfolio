'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const ResumeSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative pt-[7rem]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40"></div>
            <div className='w-[50%] h-[50vh] max-md:h-[31vh] max-md:w-[90%] overflow-hidden mx-auto my-[4rem] group relative border-b-[1rem] border border-indigo-300 rounded-xl'>
                <Link href={"https://drive.google.com/file/d/1Z9ZjNctqdOC6xV6odO1IhzL-dZRUW27K/view?usp=sharing"}>
                    <Image width={1800} height={1800} src={"/resume/resume.png"} alt='resume' />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa69] to-[#a855f761] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold [text-shadow:0.1rem_0.2rem_0.2rem_black]">View Resume</span>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}

export default ResumeSection
