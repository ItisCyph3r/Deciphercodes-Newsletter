import IconPurple from "@/assets/connect-icon-color";
import MobileNav from "./mobile-nav";

export default function Navbar() {
    return (
        <nav className="w-full bg-main-white h-20 flex-center">
            <div className="w-full px-[5%] flex-between relative">
                <div>
                    <IconPurple />
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden md:block">
                    <ul className="flex-center space-x-10">
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

                {/* MOBILE NAV */}
                <MobileNav />
            </div>
        </nav>
    )
}
