// pages/api/signup.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const email = req.body.email;

        const data = {
        members: [
            {
            email_address: email,
            status: 'subscribed', 
            },
        ],
        };

        const jsonData = JSON.stringify(data);

        const url = 'https://us14.api.mailchimp.com/3.0/lists/3fe3b3ee3c/';
        const options = {
        method: 'POST',
        auth: 'samuel1:505fca264e3ed1dcd4c9dabe7b6303a-us14',
        };

        try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: jsonData,
        });

        if (response.status === 200) {
            res.status(200).json({ message: 'Success' });
        } else {
            res.status(400).json({ message: 'Failure' });
        }
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        // Handle other HTTP methods if necessary
        res.status(405).end(); // Method Not Allowed
    }
}
