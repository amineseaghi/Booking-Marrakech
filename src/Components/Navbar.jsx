import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
        <img className="w-50 h-20" src="https://cdn-icons-png.flaticon.com/512/1708/1708364.png" alt=""/>
        <div className="flex flex-col items-end justify-end">
        <h1 className="w-50 font-bold text-black text-2xl">VACATION MARRAKECH</h1>
        <p className="items-start justify-start text-gray-400 text-sm"> & REGION</p>
        </div>
        
        </div>
        <div className="flex items-center ">
            <ul className="flex items-center justify-between gap-2">
                <li className="px-3 py-3 border-collapse bg-white text-black rounded-full hover:bg-[#9B4444] hover:text-white cursor-pointer font-bold">Home</li>
                <li className="px-3 py-3 border-collapse bg-white text-black rounded-full hover:bg-[#9B4444] hover:text-white cursor-pointer font-bold">About Us</li>
                <li className="px-3 py-3 border-collapse bg-white text-black rounded-full hover:bg-[#9B4444] hover:text-white cursor-pointer font-bold">Contact Us</li>
                <li className="px-3 py-3 mx-2 border-collapse bg-white text-black rounded-full hover:bg-[#9B4444] hover:text-white cursor-pointer font-bold">Réservation</li>
            </ul>
            <button className="btn px-6 py-3 mx-2 bg-[#9B4444] hover:bg-white hover:text-black text-white font-bold">Register</button>
            <button className="btn px-6 py-3 bg-[#9B4444] hover:bg-white hover:text-black text-white font-bold">Login</button>
        </div>

        
           
        

    </div>
  )
}

export default Navbar