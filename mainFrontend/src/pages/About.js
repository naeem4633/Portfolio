import React from 'react'
import Header from '../components/Header'
import { ResetPage } from '../components/ResetPage'

const About = () => {
  return (
    <>
    <Header  navigation={true} transparent={false}/>
    <section className="w-full min-h-[100vh] bg-gray-950 flex items-center justify-center text-gray-300 text-sm lg:text-base">
        <ResetPage />
        <div className='mx-auto w-full lg:w-3/4 flex flex-col tracking-wider px-4 lg:px-0'>
            <div className='w-full lg:w-1/2 space-y-16 my-[15vh]'>
                <div className='flex flex-col space-y-8'>
                    <h1 className='text-7xl lg:text-[8rem] 2xl:text-[10rem]'>About</h1>
                </div>
                <div className='w-full lg:w-4/5 flex flex-col space-y-2'>
                    <p className=''>My journey in the world of web development began with a fascination for the endless possibilities that code unlocks. As a versatile developer, I am proficient in a range of technologies and frameworks that empower me to build everything from captivating websites to powerful web and mobile applications.</p>
                    <p className=''>I bring innovative ideas to life and craft digital solutions that leave a lasting impression.   </p>
                </div>
                <div className='w-full lg:w-4/5 flex flex-col space-y-2'>
                    <h2 className='font-bold'>SKILLS</h2>
                    <p className=''>My expertise lies in crafting visually appealing and user-friendly websites. I believe that design should seamlessly blend with functionality to deliver an exceptional user experience.</p>
                    <p className=''>My ability to work on both frontend and backend aspects enables me to create comprehensive full stack web and mobile applications. From concept to deployment, I ensure that every component works harmoniously to deliver a cohesive user experience.</p>
                    <p className=''>I understand the unique needs of businesses, whether they're small startups or medium-sized enterprises. I specialize in developing tailored web and mobile applications that cater to these specific requirements, enhancing efficiency and user engagement.</p>
                </div>
                <div className='w-full lg:w-4/5 flex flex-col space-y-2'>
                    <h2 className='font-bold'>LET'S DO THIS!</h2>
                    <p className=''>If you're looking for a dedicated and skilled web developer who can bring your ideas to life, whether it's a stunning website, or a comprehensive web application, I'd love to connect and collaborate with you. Let's turn your vision into reality!</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
