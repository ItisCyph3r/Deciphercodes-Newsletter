// pages/api/signup.js
import { NextResponse } from "next/server"

export default async function handler(req: Request, res: Response) {
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

            
    

            
            NextResponse.json({
                message:'Success'
            }, {
                status: 200,
            })
        } else {
            NextResponse.json({
                message:'Failure'
            }, {
                status: 400,
            })
        }
        } catch (error) {
            console.error(error);

            NextResponse.json({
                message: 'Internal Server Error'
            }, {
                status: 500,
            })
        }
    } else {
        // Handle other HTTP methods if necessary
        NextResponse.json({
            message: 'Method Not Allowed'
        }, {
            status: 405,
        })
    }
}
