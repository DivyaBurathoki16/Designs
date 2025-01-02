import React from 'react'

const Home = () => {
  return (
   <>
    <div className="h-screen w-screen m-0 p-2 bg-gradient-to-r from-blue-100 to-blue-500 text-3xl">
     <h1 className='text-3xl font-serif flex justify-center'>Welcome</h1>
     <div className='flex m-20 p-10'>
     <div className='text-2xl  h-96 w-96 m-3 p-04 flex align-left justify-center bg-white hover:bg-blue-600 rounded-2xl text-black hover:text-white text-center cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105 '  > <img src="    " alt="" />This is a card that will display an image </div>
     <div className='text-2xl  h-96 w-96 m-3 p-04 flex justify-center bg-white hover:bg-blue-700 rounded-2xl text-black hover:text-white text-center cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105' > <img src="    " alt="" />This is a card that will display an image </div>
     <div className='text-2xl  h-96 w-96 m-3 p-04 flex  justify-center bg-white hover:bg-blue-800 rounded-2xl text-black hover:text-white text-center cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105' > <img src="    " alt="" />This is a card that will display an image </div>
     </div> 
    </div>

   
   </>
  )
}

export default Home