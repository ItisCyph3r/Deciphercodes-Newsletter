import IconWhite from "@/assets/connect-icon-white";
import InstagramSvg from "@/assets/instagram";
import LinkedinSvg from "@/assets/linkedin";
import TwitterSvg from "@/assets/twitter-x";


export default function Footer() {
    return (
        <footer className='w-full bg-main-black'>
            <div className='p-[5%] pb-[10%] flex-wrap flex justify-between items-start gap-8 flex-col md:flex-row'>
                <div className='flex-start flex-col gap-7 w-full max-w-md'>
                    <IconWhite />
                    <p className='body-text text-main-white/70'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ut tempora aliquid non molestiae, laborum odio nemo quia porro repellendus odit quas labore nihil fuga deleniti temporibus quo, saepe in.
                    </p>
                </div>

                <div className='flex-start flex-col gap-6'>
                    <p className='sub-title-text text-main-white'>Service</p>
                    <ul className='flex-start gap-8 flex-col text-main-white/70'>
                        <li className="body-text cursor-pointer">Home</li>
                        <li className="body-text cursor-pointer">About Us</li>
                        <li className="body-text cursor-pointer">FAQ</li>
                        <li className="body-text cursor-pointer">Contact Us</li>
                    </ul>
                </div>
                <div className='flex-start flex-col gap-6'>
                    <p className='sub-title-text text-main-white'>Others</p>
                    <ul className='flex-start gap-8 flex-col text-main-white/70'>
                        <li className="body-text cursor-pointer">Terms and Conditions</li>
                        <li className="body-text cursor-pointer">Privacy</li>
                        <li className="body-text cursor-pointer">Cookies</li>
                    </ul>
                </div>
                <div className='flex-start flex-col gap-6'>
                    <p className='sub-title-text text-main-white'>Follow us</p>
                    <ul className="flex-center gap-5">
                        <li>
                            <a
                                title="instagram"
                                rel="noopener noreferrer"
                                href=""
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <InstagramSvg />
                            </a>
                        </li>
                        <li>
                            <a
                                title="twitter-x"
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <TwitterSvg />
                            </a>
                        </li>
                        <li>
                            <a
                                title="Linkedin"
                                href="https://www.linkedin.com/in/marvellousadetunji/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="cursor-pointer text-white-sec"
                            >
                                <LinkedinSvg />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
