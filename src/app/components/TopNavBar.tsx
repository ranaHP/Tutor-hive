import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const TopNavBar = () => {
  return (
    <div className='w-full min-h-[73px] bg-primary rounded-t-md border-b-[0.1px] border-secondary px-5
                    flex justify-between items-center'>
        {/* RIGHT */}
        <div className='flex gap-8'>
            {/* LOGO */}
            <Logo/>
            {/* NAVBAR */}
            <NavBar/>
        </div>

        {/* LEFT */}
        <div className='flex '>
            {/* SEARCH BAR */}
            <SearchBar/>
            {/* NOTIFICATION */}
            {/* SETTING */}
            {/* USER PROFILE */}
        </div>
        
    </div>
  )
}

export default TopNavBar