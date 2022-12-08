import React from 'react'
import pin from '../assets/pin.png'

const Picture = (props) => {
  return (
    <div className='relative bg-red-50'>
        <img src={pin} className='absolute m-auto left-0 right-0 w-8'/>
        <img src={props.img} className='border-4'/>

    </div>
  )
}

export default Picture