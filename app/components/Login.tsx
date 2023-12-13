'use client'

import React, { useEffect } from 'react';

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
import { PiPlugsConnectedBold } from 'react-icons/pi'
import { useTheme } from 'next-themes';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveLoginSession, saveTwitchSession, saveYoutubeSession } from '@/modules/slice';
import { TbPlugConnected } from "react-icons/tb";



type Props = {}

const Login = (props: Props) => {

  const {setTheme } = useTheme();
  const { data: session, status} = useSession();
  const loginSession = useSelector((state)=> state.counter.loginSession)
  const twitchSession = useSelector((state)=> state.counter.twitchSession)
  const youtubeSession = useSelector((state)=> state.counter.youtubeSession)

  const dispatch = useDispatch()

  const handleSignIn = async () =>{
    await signIn();
    await dispatch(saveLoginSession(session))

  }

  useEffect (()=>{
    if (loginSession?.user?.name === undefined){
      dispatch(saveLoginSession(session))
    }
    if (session?.provider === 'twitch'){
      dispatch(saveTwitchSession(session))
    }
    if (session?.provider === 'google'){
      dispatch(saveYoutubeSession(session))
    }
    

  },[session])

  if (loginSession){
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <Avatar>
                <AvatarImage src={loginSession?.user?.image}/>
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <span className='sr-only'>Toggle Theme</span>
            </Button>
          </DropdownMenuTrigger>
  
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account: {session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>signIn()}>
              <span>Sign-in</span>
            </DropdownMenuItem>
  
            <DropdownMenuItem onClick={() => signOut()}>
              <span>Sign-out</span>
            </DropdownMenuItem>
  
  
            <DropdownMenuItem onClick={() =>signIn('twitch')}>
              {twitchSession?.accessToken !== undefined} ?
              <>
                <span>Connect Twitch</span><span className='ml-2 text-green-500'><PiPlugsConnectedBold /></span>
              </>
              : 
              <>
              <span>Connect Twitch</span><span className='ml-2'><TbPlugConnected /></span>

              </>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() =>signIn('google')}>
              {youtubeSession?.accessToken !== undefined} ?

              <>
                <span>Connect Youtube</span><span className='ml-2 text-green-500'><PiPlugsConnectedBold /></span>
              </>
              : 
              <>
              <span>Connect Youtube</span><span className='ml-2'><TbPlugConnected /></span>

              </>
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
  } else {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <Avatar>
                <AvatarImage src={loginSession?.user?.image}/>
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <span className='sr-only'>Toggle Theme</span>
            </Button>
          </DropdownMenuTrigger>
  
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account: {loginSession?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
      {/*       <DropdownMenuItem onClick={()=>signIn()}>
              <span>Sign-in</span>
            </DropdownMenuItem> */}
  
            <DropdownMenuItem onClick={() => handleSignIn()}>
              <span>Sign-In</span>
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
          <DropdownMenuLabel>My Account: {session?.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>signIn()}>
            <span>Sign-in</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => signOut()}>
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