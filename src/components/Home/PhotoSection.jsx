import React from 'react'
import { TiArrowRight } from 'react-icons/ti'

const PhotoSection = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center'>Memorable Moments</h1>
            <h1 className='text-base sm:text-lg lg:text-2xl font-light text-center'>Relive our cherished memories through a captivating photo gallery.</h1>
            <button className="anime5 opacity-0 group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-5">
                Photo Gallery 
              <TiArrowRight className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

        </div>
    </>
  )
}

export default PhotoSection