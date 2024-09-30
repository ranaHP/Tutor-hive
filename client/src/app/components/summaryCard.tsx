import React from 'react'
import { Button } from './ui/button'
import classNames from 'classnames'
import { SummaryCardDataI } from '../(page)/admin/page'

type SummaryCardProps = {
    key: number
    card: SummaryCardDataI
}
const SummaryCard: React.FC<SummaryCardProps> = ({ card }) => {
    return (
        <div
            className={classNames({
                'w-full p-1 h-full flex items-center gap-2 rounded-md shadow-sm cursor-pointer ': true,
                'bg-secondary': card.bg == 'bg-secondary',
                'bg-white': card.bg == 'bg-white',
                'text-white': card.bg == 'bg-secondary',
                'text-black': card.bg == 'bg-white'
            })}
            key={card.id}>

            <div className='w-1/3  flex items-center justify-center '>
                <Button variant={'summaryCardIcon'} size={'summaryCardIcon'}
                    className={classNames({
                        'bg-white': card.bg == 'bg-secondary',
                        'text-secondary': card.bg == 'bg-secondary'
                    })}
                >
                    {card.icon}
                </Button>
            </div>
            <div className='w-2/3 flex flex-col py-4'>
                <div className='text-[1.15rem] font-semibold '>{card.value}</div>
                <div className='text-[0.95rem] '>{card.title}</div>
                <div className='text-[0.7rem] '>{card.description}</div>
            </div>
        </div>
    )
}

export default SummaryCard