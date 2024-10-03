import React from 'react'
import {features} from "../constants";

const Feature = () => {
  return (
    <div className='relative mt-20 border-b min-h-[800px]'>
        <div className="text-center">
            <span className='text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>Feature</span>
            <h2 className='text-3xl sm:text-5xl lg:text-6 mt-10 lg:mt-20 tracking wide '>
                Easily build your code 
            </h2>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-20 '>
          {features.map((feature, index) => (
            <div key={index} className='w-full sm:1/2 lg:w-1/3 '>
              <div className='flex formDiv'>
                <div className='flex mx-6 h-10 w-10 p-2 justify-center items-center rounded-full border border-white bgIcons'>
                  {feature.icon}
                </div>
                <div>
                  <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                  <p className='text-md p-2 mb-20 text-neutral-500 '>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Feature