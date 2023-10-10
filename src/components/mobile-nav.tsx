'use client'

import CloseIcon from "@/assets/close-icon"
import NavIcon from "@/assets/navbar-icon"

import { useState } from "react"

export default function MobileNav() {
    const [openNav, setOpenNav] = useState<boolean>(false)

    return (
        <>
            <div className="block md:hidden absolute right-[5%]">
                <div
                    onClick={() => setOpenNav((prev) => !prev)}
                    className="cursor-pointer transform hover:scale-110 transition-transform"
                >
                    {openNav ? <CloseIcon /> : <NavIcon />}
                </div>
            </div>

            <div
                className={`block md:hidden absolute top-[53px] right-0 py-12 bg-white border-t border-gray-300 shadow-md w-full max-w-xs z-50 transition-transform transform duration-200 delay-75 ${!openNav ? 'translate-x-full' : 'translate-x-0'}`}
            >
                <ul className="flex-center flex-col gap-10 w-full px-[5%]">
                    <li className="nav-text group">
                        <a href="#home">
                            Home
                            <span
                                className="w-full h-0.5 bg-main-purple -translate-x-full transition-transform duration-300 absolute bottom-0 inset-x-0 group-hover:translate-x-0 origin-left"
                            />
                        </a>
                    </li>
                    <li className="nav-text group">
                        <a href="#about">
                            About Us
                            <span
                                className="w-full h-0.5 bg-main-purple -translate-x-full transition-transform duration-300 absolute bottom-0 inset-x-0 group-hover:translate-x-0 origin-left"
                            />
                        </a>
                    </li>

                    <li className="nav-text group">
                        <a href="#contact">
                            Contact Us
                            <span
                                className="w-full h-0.5 bg-main-purple -translate-x-full transition-transform duration-300 absolute bottom-0 inset-x-0 group-hover:translate-x-0 origin-left"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </>

    )
}
