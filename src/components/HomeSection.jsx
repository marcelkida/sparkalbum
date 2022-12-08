import React from 'react'
import Picture from './Picture'

const HomeSection = (props) => {
    const dummyPic = [
        {
            img: "https://picsum.photos/200/300",
            location: "Singapore",
            people: ["Paul", "Lah"]
        },
        {
            img: "https://picsum.photos/200/200",
            location: "Singapore",
            people: ["Paul", "Lah"]
        }
    ]

    return (
        <div className='h-[90vh] w-screen inline-block'>
            <div className=''>
                {dummyPic.map(function(memory, index){
                    return(
                        <>
                            <Picture img = {memory.img} key={index}/>
                        </>
                    )
                })}
            </div>
            <div className='absolute bottom-0 p-8'>
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