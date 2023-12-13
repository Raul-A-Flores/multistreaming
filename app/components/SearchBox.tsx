'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'
import { BsTwitch, BsYoutube } from 'react-icons/bs'

type Props = {}

const Search = (props: Props) => {

  const [inputValue, setInputValue] = useState('')
  return (
    <div className='flex w-[50&] space-x-2'>
      <Input type='text' onChange={(e)=> setInputValue(e.target.value)}/>
      <Button type='submit'>Search</Button>
      <Select  defaultValue='twitch'>
          <SelectTrigger className='w-[100px]'>
            <SelectValue placeholder='Select Platform'/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='twitch' className='text-xl'><BsTwitch /></SelectItem>
              <SelectItem value='youtube' className='text-xl'><BsYoutube /></SelectItem>

            </SelectGroup>
          </SelectContent>
      </Select>

    </div>
  )
}

export default Search