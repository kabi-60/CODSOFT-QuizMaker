import React from 'react'
import { useNavigate} from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate()

  const nextpage=()=>{

    navigate('/')
  }
  return (
  <div class="hidden lg:block w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
  <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-row items-center justify-between">
      <a href="#" onClick={nextpage} class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">KabiViruz</a>
     
    </div>
    <nav  class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
      
      <a class="px-4 py-2 mt-2 text-sm font-semibold  rounded-lg text-black/40 " href="#">Site Language: English</a>
      
    </nav>
  </div>
</div>
  )
}

export default NavBar