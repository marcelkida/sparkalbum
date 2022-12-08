import React from 'react'
import Picture from './Picture'

const HomeSection = (props) => {
    const dummyPic = [
        {
            img: "https://picsum.photos/200/300",
            location: "Singapore",
            title: "Good time",
            people: ["Paul", "Lah"]
        },
        {
            img: "https://picsum.photos/200/200",
            location: "Singapore",
            title: "Good time",
            people: ["Paul", "Lah"]
        },
        
    ]

    return (
        <div className='h-[90vh] w-screen inline-block'>
            <div className=''>
                {dummyPic.map(function(memory, index){
                        const x = Math.random() * window.innerWidth * .9
                        const y = Math.random() * (window.innerHeight * .9) / 2
                    return(
                        <>
                            <Picture img = {memory.img} key={index} location={memory.location} title={memory.title} x={x} y={y}/>
                        </>
                    )
                })}
            </div>
            <div className='absolute bottom-0 p-8 z-0'>
                    <h1 className='text-3xl'>
                        {props.title}
                    </h1>
                    <h2 className='text-xl'>
                        {props.date}
                    </h2>
            </div>
    </div>
    )
}

export default HomeSection