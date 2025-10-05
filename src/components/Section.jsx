
import React from 'react'

const Section = () => {
  return (
    <section className='relative flex justify-center items-center h-150 bg-gray-100 overflow-hidden'>
      <img 
        src='./src/images/model1.jpg' 
        alt="Fashion Model" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-4xl font-bold text-white mb-4">Discover the latest in fashion</h2>
        <p className="text-xl text-white mb-6 max-w-2xl">
          Explore our curated collection of stylish clothing for every occasion
        </p>
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Section
