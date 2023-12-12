import React from 'react';
import { cn } from '@/lib/utils';
import { Playlist } from '../data/playlists'
import { BsTwitch , BsYoutube} from 'react-icons/bs'
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>{
  playlists: Playlist[]
}

type Props = {}

const Sidebar = ({className, playlists}: SidebarProps) => {
  return (
    <div className={cn('pb-12', className)}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='flex mb-2 px-4 text-lg font-semibold trackingt-tight'>
            <span>Twitch</span><span className='text-purple-500'><BsTwitch /></span>
          </h2>
          <div className='space-y-1'>
            <Button variant="secondary" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Listen Now
              </Button>
          </div>
        </div>

        <div className='px-3 py-2'>
          <h2 className='flex mb-2 px-4 tex-tlg font-semibold trakcing-tight'>
            <span>Youtube</span>
            <span className='text-red-500 ml-2'><BsYoutube /></span>
          </h2>
          <div>
            <Button variant="secondary" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Listen Now
              </Button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sidebar