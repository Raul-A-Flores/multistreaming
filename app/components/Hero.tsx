'use client'

import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Login from './Login';
import Search from './SearchBox';
import StreamConfig from './StreamConfig';
import { useSelector } from 'react-redux';
import StreamBox from './StreamBox';

type Props = {}

const Hero = (props: Props) => {

  const selectName = useSelector((state)=> state.counter.name)
  const selectId = useSelector((state)=> state.counter.chnId)
  const selectPlt = useSelector((state)=> state.counter.chnPlt)

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <div className='flex justify-normal w-[80%]'>
          <Search />
          <StreamConfig />

        </div>
        <div className='flex justify-end w-[20%]'>
          <Login />
        </div>
      </div>


      <div className='h-full px-4 m-6 lg:px-8'>
        <Tabs  defaultValue='Stream' className='h-full space-y-6'>
          <div className='space-between flex items-center'>
            <TabsList>
              <TabsTrigger value='Stream' className='realative'>
                Stream
              </TabsTrigger>
              <TabsTrigger value='MultiView'>
                MultiView
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value='Stream' className='border-none p-0 outline-none'>
            <div className='flex flex-col pb-4 items-center'>  

            <div className='flex justify-center w-full m-2'>

              { selectId === '' &&
              <div className='w-full max-w-5xl'>
                <StreamBox streamId={selectId} platform={selectPlt} chat={true} />
              </div>
              }
              {
                selectId !== '' &&
                <div className='w-full max-w-5xl'>
                  <StreamBox streamId={selectId} platform={selectPlt} chat={true} />
                </div>
              }

            </div>



            </div>
          </TabsContent>

          <TabsContent value='MultiView' className='border-none p-0 outline-none'>
            <div className='flex flex-col pb-4 items-center'>
                MultiView
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Hero