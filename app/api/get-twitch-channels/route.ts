

import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import _ from 'lodash';
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next"




let chn_list: string =''

 export async function GET(req: Request, res: Response) {

    const session = await getServerSession(authOptions)

    const validate_endpoint = 'https://id.twitch.tv/oauth2/validate'
    const get_follow_endpoints = `https://api.twitch.tv/helix/channels/followers?broadcaster_id=${session.id}`
    const get_user_endpoint = `https://api.twtich.tv/helix/users/follows?to_id=${session.id}&first=10`
    const get_followers_endpoint = `https://api.twitch.tv/helix/channels/followed?user_id=${session.id}`


//console.log(session)
    let data = []


    const response = await fetch(get_followers_endpoint, {
        headers: {
            'Authorization': 'Bearer ' + (session.accessToken),
            'Client-Id': process.env.TWITCH_CLIENT_ID

        }
    }).then((resp) =>  resp.json()
      )
      .catch((err) => {
        console.log(err)
      })

    return NextResponse.json({ response })

/* 
    .then((r) => r.json())
    .then((d)=>{
        console.log(d.client_id)
        const bearer = _.replace('token', 'OAuth', 'Bearer')
        fetch(get_follow_endpoint+d.user_id,{
            headers: {
                'Authorization': bearer, 
                'Client-id': d.client_id
            }
        }).then((tmp) => tmp.json())
        .then((tmp)=>{
            const result = tmp.data.map((value, index)=>{
                if(index === 0 ){
                    chn_list = chn_list + '?login=' + value.broadcaster_login
                } else{
                    chn_list = chn_list + '&login=' + value.broadcaster_login

                }
                
            })
            fetch(channel_endpoint+chn_list,{
                headers:{
                    'Authorization': bearer, 
                    'Client-id': d.client_id
                }
            }).then((raw_data)=> raw_data.json())
            .then((raw_data)=>{
                const data = {data: raw_data, platform: 'twitch'}

            })  
        })
    })
 */
    
} 





