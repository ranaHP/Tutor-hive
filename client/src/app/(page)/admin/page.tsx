import { AttendanceChart } from '@/app/components/barChart'
import { ComboBox } from '@/app/components/combobox'
import { GradesChart } from '@/app/components/gradesChart'
import Performers from '@/app/components/performers'
import { QuestionLevelChart } from '@/app/components/QuestionLevelChart'
import { QuestionTypeChart } from '@/app/components/questionType'
import SummaryCard from '@/app/components/summaryCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'
import { Button } from '@/app/components/ui/button'
import { CalendarDays, Filter, GraduationCap, NotebookText, PencilRuler, Users } from 'lucide-react'
import React, { ReactElement } from 'react'

export interface SummaryCardDataI {
  id: number,
  icon: ReactElement,
  title: string,
  description: string,
  value: string,
  bg: string
}

const AdminPage = () => {
  const summaryCards: SummaryCardDataI[] = [
    {
      id: 1,
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Total Students',
      description: 'Total Students',
      value: '2,000',
      bg: 'bg-white'
    },
    {
      id: 2,
      icon: <NotebookText className="h-6 w-6" />,
      title: 'Total Quize',
      description: 'Total Quize',
      value: '1,010',
      bg: 'bg-secondary'
    },
    {
      id: 3,
      icon: <CalendarDays className="h-6 w-6" />,
      title: 'Up Comming Quizes',
      description: 'Total Students',
      value: '19-10-2024',
      bg: 'bg-white'
    },
    {
      id: 4,
      icon: <Users className="h-6 w-6" />,
      title: 'Total Instructors',
      description: 'Total Quize',
      value: '1,010',
      bg: 'bg-white'
    },
    {
      id: 4,
      icon: <PencilRuler className="h-6 w-6" />,
      title: 'Total Units',
      description: 'Total Units',
      value: '10',
      bg: 'bg-white'
    },
  ]
  return (
    <div className='flex w-full h-fit flex-col px-10 pb-10 b'>
      {/* USER DETAILS PROFILE */}
      <div className='w-full h-fit py-5 flex justify-between'>
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

        <div className='w-fit flex gap-4  items-center'>
             <ComboBox  />
            <Button variant="secondary" size="default" className='text-white' > <Filter className="h-3 w-3 mr-2"/>  Filter </Button>
        </div>
      </div>

      {/* 2ND ROW */}
      <div className='w-full flex flex-row justify-between items-center gap-7 mt-10'>
        {/* SUMMARY CARD */}
        {summaryCards.map((card) => <SummaryCard key={card.id} card={card} />)}
      </div>

      {/* 3RD ROW */}
      <div className='w-full flex flex-row justify-between  gap-7 my-6 '>
        <div className='w-2/5 flex'>
          <AttendanceChart />
        </div>
        <div className='w-3/5 flex justify-start items-start  '>
          <Performers />
        </div>
      </div>

      {/* 4RD ROW */}
      <div className='w-full flex flex-row justify-between items-start gap-7  '>
        <div className='w-full flex gap-7'>
          <GradesChart />
          <QuestionTypeChart />
          <QuestionLevelChart />
        </div>
      </div>
    </div>
  )
}

export default AdminPage