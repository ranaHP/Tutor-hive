'use client';
import React from 'react'
import Lottie from 'react-lottie-player'
import lottiesLogo from '../../../public/lottie/logo.json'

const Logo = () => {
  return (
    <div className=' bg-primary rounded-full flex items-center justify-center gap-2 px-2'>
      <Lottie
        loop
        animationData={lottiesLogo}
        play
        style={{ width: 40, height: 40 }}
      />
      <div className=''>
        <h1 className='text-[1.6rem] font-bold text-white'><span className='text-secondary'>PYD</span>IUM</h1>
      </div>
    </div>
  )
}

export default Logo