import React from 'react'
import fundraisingImg from '../assets/Images/fundraising.jpeg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>

      <div className='relative w-full'>
        <img src={fundraisingImg} alt="Fundraising" className='w-full h-[40vh] md:h-[60vh] sm-[50vh] lg:h-[70vh] object-cover opacity-50' />

        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
text-xl sm:text-2xl md:text-5xl text-black font-bold p-2 rounded">
          Welcome to the Fundraising Intern Portal
        </h1>

      </div>

      <section className="flex flex-col items-center justify-center text-center px-6 py-10">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-blue-800 mb-4">
          “Be the spark — inspire generosity, create impact.”
        </h1>
        <p className="text-lg sm:text-1/2xl text-gray-700 max-w-2xl mb-6">
          Welcome to the Fundraising Intern Portal. Track your progress, unlock rewards, and be part of a meaningful change.
        </p>
        <div className="flex justify-center mt-8">
  <Link to="/dashboard">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg md:text-sm hover:bg-blue-700 transition duration-300">
          Go to Dashboard
        </button>
         </Link>
</div>
      </section>
      <hr />
      <section className="bg-white px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">About the Portal</h2>
        <p className="text-gray-800 text-xl leading-relaxed">
          The Fundraising Intern Portal is your personalized dashboard to track activities, set goals, and stay motivated during your internship journey. Whether you're reaching milestones, unlocking rewards, or collaborating with your team — this platform empowers you every step of the way.
          <br /><br /> Our goal is to make fundraising fun, rewarding, and impactful. Join hands in creating meaningful change while gaining real-world experience and building a strong community.
        </p>
      </section>

      <section className='bg-blue-100 flex flex-col justify-center h-[40vh] lg:h-[40vh] md:h-[50vh] sm:h-[30vh]'>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900 text-center">Contact Us</h2>
        <p>
          <h2 className='text-xl font-bold pl-7'> Fundraising Intern Support Team </h2>
          <br />📍 Address: 123 Impact Street, New Delhi, India – 110001
          <br />📧 Email: support@fundraisingportal.org
          <br />📞 Phone: +91 98765 43210
          <br />🌐 Website: www.fundraisingportal.org

          <br />We're here to help! Reach out for any questions or support during your internship.
        </p>
      </section>
    </>
  )
}

export default Home