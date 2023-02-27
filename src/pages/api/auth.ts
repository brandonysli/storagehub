import { NextApiRequest, NextApiResponse } from "next";
import qs from 'qs';
import axios from 'axios';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    const code = req.query.code as string;

    const url = 'http://oauth2.googleapies.com/token'

    const values = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code'
    }

    try {
        const res = await axios.post(url, qs.stringify(values)
        , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return res
    } catch (error:any) {
        console.log(error)
    }



    res.status(200).json({ name: 'John Doe' })
  }