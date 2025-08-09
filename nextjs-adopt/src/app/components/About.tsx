import React from 'react'
import { assets, infoList, toolsData } from '../../../assets/assets'
import Image from 'next/image'

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({isDarkMode}: AboutProps) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-5xl font-ovo'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'> 
                <Image src={assets.user_image} alt="user_image" className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-ovo'>
                    Some text about myself. I am a front-end developer with a passion for creating beautiful and functional web applications. I love to learn new technologies and improve my skills. I have experience in HTML, CSS, JavaScript, and React. I am always looking for new challenges and opportunities to grow as a developer.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => {
                        return (
                            <li key={`info-${index}`} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white '>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </li>
                        )
                    })}
                </ul>

                <h4 className='my-6 text-gray-700 font-ovo dark:text-white'>Tools I use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <li key={`tool-${index}`} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500'>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About