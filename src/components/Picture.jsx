import React from 'react'
import pin from '../assets/pin.png'

const Picture = (props) => {
    const x = Math.random() * window.innerWidth*.9
    const y = Math.random() * (window.innerHeight*.9)/2
    const a = Math.random() < 0.5 ? -1 : 1 * 10
  return (
    <div className='relative' style={{left: x, top: y, transform: `rotate(${a}deg)`}}>
        <div  className='relative bg-red-50 inline-block'>
            <img src={pin} className='absolute left-0 right-0 m-auto'/>
            <img src={props.img} className='border-4'/>
        </div>
    </div>
  )
}

export default Picture