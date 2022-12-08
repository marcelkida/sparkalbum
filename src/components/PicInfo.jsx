import React from 'react'
import locationPin from '../assets/locpin.svg'

const PicInfo = ({people, location, title}) => {
  return (
    <div className='absolute bottom-0 w-48  my-2'>
        <div className="font-spaceGrotesk font-bold text-xl flex justify-start">
          <img src={locationPin} className='m-0'/>
          <p className='ml-1'>{title}</p>
        </div>
        <p className='ml-1 font-spaceGrotesk font-normal text-s'>{location}</p>
        <div className="flex w-full flex-wrap">{people.map(person => {
          return <p className='px-1 py-0.5 ml-1 mb-0.5 p-1 font-spaceGrotesk font-light text-xs text-white bg-stone-400 rounded-sm'>@{person}</p>
        })}</div>
        
        
    </div>
  )
}

export default PicInfo