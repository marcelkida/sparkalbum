import React from 'react'
import HomeSection from './HomeSection'

const Home = () => {
    return (
        <div className='w-[200vw]'>
            <HomeSection title="This Week" date="11.6 - 11.13"/>
            <HomeSection title="Last Week" date="10.20-003.3"/>
        </div>
    )
}

export default Home