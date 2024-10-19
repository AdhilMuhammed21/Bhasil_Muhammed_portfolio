import React from 'react'
import {ROADMAP} from '../Constants/Constants'

function Roadmap() {
  return (
    <div className='px-4 md:border-b border-neutral-900 pb-4 bg-[#e4bfac]'>
    <h2 className='my-20 text-center text-4xl'>Roadmap</h2>
    <div>
    {ROADMAP.map((roadmap,index)=>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-800'>{roadmap.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{roadmap.role} - <span className='text-sm text-gey-400'>{roadmap.company}</span></h6>
                <p className='mb-4 text-neutral-700'>{roadmap.description}</p>

            </div>
        </div>

    ))}

    </div>
      
    </div>
  )
}

export default Roadmap
