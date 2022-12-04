import React from 'react'

const HomeSection = (props) => {
    return (
        <div className='h-[90vh] bg-blue-500 w-screen inline-block'>

            <div >
                hey
            </div>
            <div>
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