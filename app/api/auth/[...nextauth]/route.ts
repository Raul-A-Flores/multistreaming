import NextAuth from 'next-auth/next';
import TwitchProvider from 'next-auth/providers/twitch'
import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth';



export const authOptions: AuthOptions = {
    providers:[
        TwitchProvider({
            clientId: <string>process.env.TWITCH_CLIENT_ID,
            clientSecret: <string>process.env.TWITCH_CLIENT_SECRET,
            authorization: { params: {scope: 'openid user:read:email user:read:follows'}}

        }),
        GoogleProvider({
            clientId: <string>process.env.GOOGLE_CLIENT_ID,
            clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET, 
            authorization: {params: {scope: 'openid email profile https://www.googleapis.com/auth/youtube.readonly'}}
        })
    ],
    callbacks:{
        async session({ session,user, token}){
            return {...session, ...token}
        },

        async jwt({token, user, account}){
            if(user){
                token.id = user.id
            }

            if (account){
                token.accessToken = account.access_token
                token.provider = account.provider 
        }

        return token
    }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
