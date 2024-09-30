'use client';
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Table, TableBody, TableCell, TableRow } from './ui/table';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ChartConfig } from './ui/chart';

interface PerformersListI {
    id: string,
    rank: number,
    name: string,
    profile: string,
    marks: string,
}

const chartConfig = {
    views: {
        label: "Page Views",
    },
    Best: {
        label: "Best",
        color: "hsl(var(--chart-1))",
    },
    Worst: {
        label: "Worst",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const Performers = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [performersList, setperformersList] = useState<PerformersListI[] | null>([
        // {
        //     id: '1',
        //     rank: 1,
        //     name: 'Hansana ',
        //     profile: './user.png',
        //     marks: '1,000',
        // },
        {
            id: '1',
            rank: 2,
            name: 'Kasun Doe',
            profile: './user.png',
            marks: '2,030',
        },
        {
            id: '1',
            rank: 3,
            name: 'Shehan Doe',
            profile: './user.png',
            marks: '2,200',
        },
        {
            id: '1',
            rank: 4,
            name: 'Tharushi Doe',
            profile: './user.png',
            marks: '4,000',
        }, {
            id: '1',
            rank: 7,
            name: 'Rithik',
            profile: './user.png',
            marks: '2,402',
        }, {
            id: '1',
            rank: 7,
            name: 'Yugath',
            profile: './user.png',
            marks: '2,000',
        }])

    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("Best")

    const total = React.useMemo(
        () => ({
            Best: 7,
            Worst: 7,
        }),
        []
    )

    return (
        <Card className='w-full h-full' >
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row ">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle> Performers Insights:</CardTitle>
                    <CardDescription>
                        Best Performers and Worst Performers Insights
                    </CardDescription>
                </div>
                <div className="flex">
                    {/*                     
                    <button
                        className="flex flex-1 flex-col justify-center items-center gap-1 border-t px-6 py-4 text-left even:border-l bg-muted/50 sm:border-l sm:border-t-0  "
                    >
                        <span className="text-xs text-muted-foreground">
                            Weak
                        </span>
                        <span className="text-lg font-bold leading-none sm:text-3xl text-center">
                            7
                        </span>
                    </button> */}

                    {["Best", "Worst"].map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 "
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg font-bold leading-none sm:text-3xl">
                                    {total[key as keyof typeof total].toLocaleString()}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6 h-full">
                <div className='w-full  '>
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        {/* <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Rank</TableHead>
                                <TableHead>Profile</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader> */}
                        <TableBody>
                            {performersList?.map((invoice) => (
                                <TableRow data-active={invoice.rank === 1} key={invoice.rank} className=' m-0 p-0  hover:bg-secondary hover:text-white cursor-pointer rounded-md data-[active=true]:bg-secondary data-[active=true]:text-white'>
                                    <TableCell className="font-medium">{invoice.rank}</TableCell>
                                    <TableCell> <Avatar className='w-9 h-9'>
                                        <AvatarImage src={invoice.profile} />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar> </TableCell>
                                    <TableCell>{invoice.name}</TableCell>
                                    <TableCell>{invoice.marks}</TableCell>
                                    <TableCell className="text-right">{invoice.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}

export default Performers