import React from 'react';
import { cn } from '@/lib/utils';
import { Playlist } from '../data/playlists'
import { BsTwitch , BsYoutube} from 'react-icons/bs'


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
              zas
          </div>
        </div>

        <div className='px-3 py-2'>
          <h2 className='flex mb-2 px-4 tex-tlg font-semibold trakcing-tight'>
            <span>Youtube</span>
            <span className='text-red-500 ml-2'><BsYoutube /></span>
          </h2>
          <div>
            dsfsda
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sidebar