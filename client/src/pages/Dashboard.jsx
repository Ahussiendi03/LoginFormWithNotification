import React from 'react'

const Dashboard = () => {
  return (
    
    <div className='h-screen w-screen flex justify-center items-center bg-black'>
        <div className='bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-1 rounded-full 
        hover:scale-105 animate-bounce'>
            <div className='text-white bg-neutral-900 p-10 rounded-full cursor-pointer font-extrabold text-3xl'>Click me</div>
        </div>
        
    </div>
  )
}

export default Dashboard