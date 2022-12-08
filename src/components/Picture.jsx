import { useVelocity, useScroll, useTransform, useSpring } from 'framer-motion'
import React from 'react'
import pin from '../assets/pin.png'
import { motion } from 'framer-motion'
import PicInfo from './PicInfo'
import { useState } from 'react'


const Picture = (props) => {
    const x = Math.random() * window.innerWidth * .9
    const y = Math.random() * (window.innerHeight * .9) / 2
    const a = Math.random() < 0.5 ? -1 : 1 * 10


    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, { damping: 0, stiffness: 100, bounce: .5 })
    const rand = Math.random() * 20
    const tilt = useTransform(smoothVelocity, [-1000, 1000], [-40 - rand, 40 + rand])

    const variants = {
        ini: {
            opacity: 0,
            x: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            },
        },
        hover: {
            opacity: 1,
            x: "100%",
            zIndex: 100,
            transition: {
                ease: [0.6, 0.01, 0, 0.95],
                duration: .2,
            },
        }
    }
    const [hover, setHover] = useState(false);

    const overlay = {
        trans: {
            opacity: 0,
        },
        not: {
            opacity: .8
        }
    }

    return (
        <>
            <motion.div className='h-screen w-[200vw] absolute top-[-10vh] left-0 bg-white z-[100] pointer-events-none' animate={hover ? "not" : "trans"} variants={overlay}/>
            <motion.div className='relative' style={{ left: props.x, top: props.y, }} >
                <motion.div className='inline-block' whileHover={"hover"} initial={"ini"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

                    <motion.div className={`relative inline-block origin-top-center ${hover ? `z-[102]` : `z-30`}`} style={{ rotate: tilt }}>
                        <img src={pin} className='absolute left-0 right-0 m-auto' />
                        <img src={props.img} className='border-4 border-[#FCFCFC]' />
                    </motion.div>
                    <motion.div variants={variants} transition={{ bounce: 0 }} className={`${hover ? `z-[101]` : `z-0`}`}>
                        <PicInfo title="Hello" people={["Paul", "Lah", "marcel", "lah", "sumanth", "lah"]} location="Cool stuff!" />
                    </motion.div>
                </motion.div>


            </motion.div>
        </>

    )
}

export default Picture