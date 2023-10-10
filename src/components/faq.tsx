'use client'

import { useState } from "react";

// export const faqs = [
//     {
//         faq: "How do I buy a ticket using connect app?",
//         answers: ''
//     },
//     {
//         faq: "How do I buy a ticket using connect app?",
//         answers: ''
//     },
//     {
//         faq: "How do I buy a ticket using connect app?",
//         answers: ''
//     },
//     {
//         faq: "How do I buy a ticket using connect app?",
//         answers: ''
//     },
//     {
//         faq: "How do I buy a ticket using connect app?",
//         answers: ''
//     },
// ];


export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const setShowRules = (i: number) => {
        if (activeIndex === i) {
            setActiveIndex(null)
            return
        }
        setActiveIndex(i)
    }

    return (
        <div className="flex-center flex-col gap-6 w-full">
            {Array.from({ length: 5 }).map((_, i) => (
                <div className="flex flex-col gap-2 w-full" key={i}>
                    <div className="flex-between gap-4 px-5 py-9 w-full bg-main-white rounded-[2.9375rem] shadow-sm cursor-pointer" onClick={() => setShowRules(i)}>
                        <h1 className="text-3xl font-normal text-main-black">How do I buy a ticket using connect app?</h1>
                        <span className={`body-text cursor-pointer duration-300 transition-all ${activeIndex === i && 'rotate-180'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                <path
                                    fill="none"
                                    stroke="#6528F7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="4"
                                    d="M36 18L24 30L12 18"
                                />
                            </svg>
                        </span>
                    </div>
                    {activeIndex === i &&
                        <p className="p-3 body-text bg-main-white rounded-lg shadow-sm">
                            paste azaaaaa
                        </p>
                    }
                </div>
            ))}
        </div>
    )
}
