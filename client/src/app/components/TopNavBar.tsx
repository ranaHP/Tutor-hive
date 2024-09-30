import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import { Button } from './ui/button'
import { Bell, Settings } from 'lucide-react'
import SearchBar from './SearchBar'
import TopbarUserProfile from './topbarUserProfile'
import FullscreenButton from './fullScreenButton'

const TopNavBar = () => {
  
  return (
    <div className='w-full min-h-[73px] bg-primary rounded-t-lg border-b-[0.1px] border-secondary px-5
                    flex justify-between items-center'>
      {/* RIGHT */}
      <div className='flex gap-8'>
        {/* LOGO */}
        <Logo />
        {/* NAVBAR */}
        <NavBar />
      </div>

      {/* LEFT */}
      <div className='flex items-center gap-3'>
        {/* SEARCH BAR */}
        <SearchBar />

        <div className='mx-1'>
          {/* NOTIFICATION */}
          <Button variant="navIcon" size="icon" className=''>
            <Bell className="h-4 w-4" />
          </Button>
          
          {/* SETTING */}
          <Button variant="navIcon" size="icon" className=''>
            <Settings className="h-4 w-4" />
          </Button>

          {/* FULL SCREEN */}
          <FullscreenButton/>

        </div>
        {/* USER PROFILE */}
        <TopbarUserProfile/>
        
      </div>

    </div>
  )
}

export default TopNavBar