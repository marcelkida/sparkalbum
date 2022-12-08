import React from 'react'
import pin from '../assets/pin.png'
import PicInfo from './PicInfo'

const Picture = (props) => {
  return (
    <div className='relative bg-red-50'>
        <img src={pin} className='absolute m-auto left-0 right-0 w-8'/>
        <img src={props.img} className='border-4'/>
        <PicInfo title="Hello" people = {["Paul", "Lah", "marcel", "lah", "sumanth", "lah"]} location= "Cool stuff!"/>

    </div>
  )
}

export default Picture