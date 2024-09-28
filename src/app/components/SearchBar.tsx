import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
    return (
        <div className=' h-[37px] hidden md:flex items-center gap-2 text-xs rounded-md ring-[0.5px] ring-gray-300 px-2 bg-white '>
            <Image src="/search.png" alt="" width={16} height={16} className='ml-2' />
            <input type="text" placeholder="Search..." className="w-[200px] py-2 bg-transparent outline-none" />
        </div>
    )
}

export default SearchBar