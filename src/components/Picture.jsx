import { useVelocity, useScroll, useTransform, useSpring } from 'framer-motion'
import React from 'react'
import pin from '../assets/pin.png'
import { motion } from 'framer-motion'
import PicInfo from './PicInfo'


const Picture = (props) => {
    const x = Math.random() * window.innerWidth*.9
    const y = Math.random() * (window.innerHeight*.9)/2
    const a = Math.random() < 0.5 ? -1 : 1 * 10

    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {damping: 0, stiffness: 100, bounce: .5})
    const rand = Math.random() * 20
    const tilt = useTransform(smoothVelocity, [-1000, 1000], [-40 - rand, 40 + rand])

    console.log(props.img)

    return (
    <motion.div className='relative' style={{left: x, top: y, }}>
        <motion.div  className='relative bg-red-50 inline-block origin-top-center' style={{rotate: tilt}}>
            <img src={pin} className='absolute left-0 right-0 m-auto'/>
            <img src={props.img} className='border-4'/>
        </motion.div>
        <PicInfo title="Hello" people = {["Paul", "Lah", "marcel", "lah", "sumanth", "lah"]} location= "Cool stuff!"/>
    </motion.div>
  )
}

export default Picture