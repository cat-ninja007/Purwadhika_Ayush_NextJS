import { FC } from "react";
import Link from "next/link";

const Navigation:FC = () => {
    return(
        <>
            <div className="navigation flex justify-between pt-[26px] pb-[26px] pl-[80px] pr-[80px] absolute left-0 right-0">
                <div className="header-left">
                    <a className="text-black" href="/">@Ayush Barnwal</a>
                </div>
                <div className="header-right">
                    <nav>
                        <ul className="flex gap-[40px]">
                            <li>
                                <Link href="#about">About</Link>
                            </li>
                            <li>
                                <Link href="/">Work</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navigation