'use client'

import React, { useState } from "react";
import { toast } from "sonner";

const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

const isValidEmail = (email: string) => {
    return emailRegex.test(email);
};

export default function WaitListForm() {
    const [email, setEmail] = useState<string>('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isValidEmail(email)) {
            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'appication/json',
                },
                body: JSON.stringify({email: email)
            }).then((response ) => {
                if(response.ok){
                    return response.json();
                } else {
                    throw new Error('Request Failed);
                }
            }).then((data) => {
                console.log(data)
            }.catch(error => {
               console.error(error); 
            })
        
            toast.success('Glad to have you on our journey')
        } else {
            toast.error('Enter a valid email')
        }


    }
    return (
        <div className="w-full max-w-lg my-11 relative">

            <form className="w-full" onSubmit={onSubmit}>
                <label>
                    <input
                        type="email"
                        title="email"
                        className="w-full h-[4.875rem] bg-main-white rounded-[3.125rem] pl-6 p-4 placeholder:text-xl"
                        placeholder="Enter email address"
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button
                        title="join-waitlist"
                        type="submit"
                        className="bg-main-purple text-white font-normal text-xl absolute right-3 top-[0.625rem] rounded-full flex-center h-[3.625rem] py-4 px-8"
                        onClick={onSubmit}
                    >
                        Join waitlist
                    </button>
                </label>
            </form>
        </div>
    )
}


