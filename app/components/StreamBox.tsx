'use client'



import React from 'react'
import ReactPlayer from 'react-player'
import { TwitchChat } from 'react-twitch-embed'
import './Player.css'


type Props ={
    streamId: string;
    platform: string;
    chat: boolean;
}


type ChatProps ={
    id: string;
}



const StreamBox = ({streamId, platform, chat=false}: Props) => {

    const twitchEndpoint = 'https://twitch.tv/'+'fobm4ster'


    let chatClass = 'col-span4 player-wrapper'

        if(chat){
            chatClass = 'col-span-3 player-wrapper'
        }

  return (
    <div className='h-min-[550px] h-full shadow-2xl shadow-indigo-500/50'>

        <div className='flex '>
            <ReactPlayer 
                className = '' url={twitchEndpoint} width='100%' height='550px' playing controls={true}
                />
            <div>
                {chat && 
                    <div className=''>
                        <TwitchChat channel={'fobm4ster'} width='280'/>
                    </div>
                }
            </div>

        </div>



    </div>
  )
}

export default StreamBox