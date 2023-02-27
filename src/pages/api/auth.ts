import { NextApiRequest, NextApiResponse } from "next";
import qs from 'qs';
import axios from 'axios';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    


    res.status(200).json({ name: 'John Doe' })
  }