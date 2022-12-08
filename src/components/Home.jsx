import React from 'react'
import HomeSection from './HomeSection'
import { useScroll, useTransform} from 'framer-motion';
import { motion } from 'framer-motion'



const Home = () => {

const { scrollY } = useScroll()
const transX = useTransform(scrollY, [0, window.innerHeight * 2], [0, -window.innerWidth])

    return (
        <div>
            <motion.div style={{ translateX: transX }} className='w-[200vw] fixed top-[10vh]'>
                <HomeSection title="This Week" date="11.6 - 11.13"/>
                <HomeSection title="Last Week" date="10.20-003.3"/>
            </motion.div>
        </div>
    )
}

export default Home