import React from 'react'
import { FaUser } from 'react-icons/fa'

const LoginButton = () => {
 return (
     <div className='flex gap-4 p-4 rounded-full bg-amber-200 md:bg-black text-gray-800 md:text-white shadow-md cursor-pointer'>
       <FaUser />
     </div>
   )
}

export default LoginButton