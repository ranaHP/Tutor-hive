import Illustration from '@/app/components/Illustration'
import TopNavBar from '@/app/components/TopNavBar'
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
     <main className="flex min-h-screen flex-col items-center justify-between px-[4.5px] pt-[4.5px]">
      {/* TOP BAR */}
      <TopNavBar />
      <div className=" w-full flex flex-1 relative">
        {/* BackGround Illustration */}
        <Illustration/>
        {/* CONTENT */}
        <div className="w-full h-full flex flex-1 flex-grow bg-transparent absolute px-14 py-10">
            {children}
        </div>
      </div>
    </main>
  )
}

export default layout