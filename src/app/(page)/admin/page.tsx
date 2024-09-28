import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'
import { Button } from '@/app/components/ui/button'
import classNames from 'classnames'
import { CalendarDays, GraduationCap, NotebookText, Users } from 'lucide-react'
import React from 'react'

const AdminPage = () => {
  const summaryCards = [
    {
      id: 1,
      icon: <GraduationCap className="h-5 w-5" />,
      title: 'Total Students',
      description: 'Total Students',
      value: '2,000',
      bg: 'bg-white'
    },
    {
      id: 2,
      icon: <NotebookText className="h-5 w-5" />,
      title: 'Total Quize',
      description: 'Total Quize',
      value: '1,010',
      bg: 'bg-secondary'
    },
    {
      id: 3,
      icon: <CalendarDays className="h-5 w-5" />,
      title: 'Up Comming Quizes',
      description: 'Total Students',
      value: '19/10/2024',
      bg: 'bg-white'
    },
    {
      id: 4,
      icon: <Users className="h-5 w-5" />,
      title: 'Total Instructors',
      description: 'Total Quize',
      value: '1,010',
      bg: 'bg-white'
    }
  ]
  return (
    <div className='flex w-full h-full flex-col px-10'>
      {/* USER DETAILS PROFILE */}
      <div className='w-full h-fit py-5'>
        <div className='flex items-center gap-4 cursor-pointer'>
          <Avatar className='h-14 w-14'>
            <AvatarImage src="./user.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='text-[1.1rem] text-white flex flex-col'>
            <div>
              Hello Hansan ranaweera! 👋
            </div>
            <div className='text-[0.8rem] text-customGray-200'>
              We missed having you here. Let’s pick up where we left off.
            </div>
          </div>
        </div>
      </div>

      {/* 2ND ROW */}
      <div className='w-full flex flex-row justify-between items-center gap-7 mt-10'>
        {/* SUMMARY CARD */}
        {summaryCards.map((card) => (
          <div
            className={classNames({
              'w-full p-1 h-full flex items-center gap-2 rounded-md shadow-sm ': true,
              'bg-secondary': card.bg == 'bg-secondary',
              'bg-white': card.bg == 'bg-white',
              'text-white': card.bg == 'bg-secondary',
              'text-black': card.bg == 'bg-white',
            })}
            key={card.id}>

            <div className='w-1/3  flex items-center justify-center'>
              <Button variant={'summaryCardIcon'} size={'summaryCardIcon'} >
                {card.icon}
              </Button>
            </div>
            <div className='w-2/3 flex flex-col py-4'>
            <div className='text-[1.15rem] font-semibold '>{card.value}</div>
              <div className='text-[0.95rem] '>{card.title}</div>
              <div className='text-[0.7rem] '>{card.description}</div>
            </div>

          </div>
        ))}
      </div>

      {/* 3RD ROW */}
      <div className='w-full flex flex-row justify-between items-center gap-7 mt-10'>

      </div>
    </div>
  )
}

export default AdminPage