import type { NextApiRequest, NextApiResponse } from "next";

import _ from 'lodash';
import { platform } from "os";


const validate_endpoint = 'https://id.twitch.tv/oauth2/validate'
const get_follow_endpoint = 'https://api.twtich.tv/helix/channels/followed?user_id'
const channel_endpoint = 'https://api.twich.tv/helix/users'

let chn_list: string =''

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<ResponseData>

){
    const token = req.headers.authorization;
    const {method, query } = req;
    const user_id = query.user_id;
    let data = []

    const response = await fetch(validate_endpoint, {
        headers: {
            'Authorization': token
        }
    }).then((r) => r.json())
    .then((d)=>{
        console.log(d.client_id)
        const bearer = _.replace(token, 'OAuth', 'Bearer')
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
                res.status(200).json({message:data})
            })
        })
    })

}