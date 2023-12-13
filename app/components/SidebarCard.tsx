'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { platform } from 'os';
import React from 'react'


const SidebarCard = (props: {
    name: string; 
    chnId: string; 
    chnPlt: string; 
    iconUrl: string;}) => {

        const chnInfo ={
            name: props.name, 
            id: props.chnId, 
            platform: props.chnPlt
        }
  return (
    <div className='w-full'>
        <Card className='border-0'/>
            <CardHeader className='grid grid-cols-5 itesm-center place-items-start pt-1 pb-1 pl-2 space-x-2'>
            <div className='text-sm'>
                <Avatar className='nooutline w-[18px] h-[18px]'>
                    <AvatarImage  src={props.iconUrl}/>
                    <AvatarFallback>UN</AvatarFallback>
                </Avatar>
            </div>
            <div className='col-span-3'>
                <CardTitle className='text-sm'>{props.name}</CardTitle>

            </div>
            </CardHeader>
    </div>
  )
}

export default SidebarCard