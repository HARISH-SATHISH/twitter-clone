import axios from "axios";
import { json } from "body-parser";
import { prismaCilent } from "../cilent/db";
import { PrismaClient } from "@prisma/client";
interface googleTokenResults {
    
        iss?:string;
        nbf?: string;
        aud?: string;
        sub?: string;
        email?: string;
        email_verified?:string;
        azp?: string;
        name?: string;
        picture?: string;
        given_name?: string;
        iat?: string;
        exp?: string;
        jti?: string;
      
}

const queries={
    verifyGoogleToken:async(parent:any,{token}:{token:string})=>{
     const googleToken =token
     const googleOauthUrl= new URL('https://oauth2.googleapis.com/tokeninfo')
     googleOauthUrl.searchParams.set('id_token', googleToken )
     

     const {data} = await axios.get<googleTokenResults>(googleOauthUrl.toString(),{
        responseType:'json'
     })

    const user = await prismaCilent.user.findunique({
        where:{email:data.email}
    })
    

    },
}

export const resolvers={queries};