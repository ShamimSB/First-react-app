import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col text-white text-center px-4 items-center justify-center h-[90vh]" style={{
      backgroundImage: "url('/src/assets/bg.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}>
        <h2 className="text-4xl md:text-6xl mb-4 font-bold">Welcome to My Website</h2>
        <p className='text-lg md:text-xl mb-4'>Your Journey Start Here.</p>
        <button className="bg-white text-indigo-600 font-medium px-6 py-2 rounded-md cursor-pointer hover:bg-sky-200">Purchase Products</button>
    </div>
  )
}

export default HeroSection;