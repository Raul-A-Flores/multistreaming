'use client'

import React from 'react';

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
}
from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

type Props = {}

const Login = (props: Props) => {

  const {setTheme } = useTheme()
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='nooutline' size-icon>
            <Avatar>
              <AvatarImage src=''/>
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <span className='sr-only'>Toggle Theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account: Test</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Sign-in</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span>Sign-out</span>
          </DropdownMenuItem>


          <DropdownMenuItem>
            <span>Connect Twitch</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Connect Youtube</span>
          </DropdownMenuItem>
          
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Moon  className='mr-2 h-4 w-4'/>
              <span>Design</span>
            </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={()=> setTheme('dark')}>
                    <Moon className='mr-2 h-4 w-4'/>
                    <span>Dark Mode</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem  onClick={()=> setTheme('light')}>
                    <Sun className='mr-2 h-4 w-4'/>
                    <span>Light Mode</span>
                  </DropdownMenuItem>

                </DropdownMenuSubContent>
              </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Login