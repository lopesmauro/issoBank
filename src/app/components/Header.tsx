import Image from "next/image"
import logo from "@/assets/logo.svg"
import arrow from "@/assets/arrow-down.svg"

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-primary-orange">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="flex items-center gap-14">
                        <Image src={logo} alt="Logo" />
                        <ul>
                            <li>
                                <button className="flex items-center gap-3">
                                    <span className="text-white font-bold">Para você</span>
                                    <Image src={arrow} alt="Seta para baixo"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}   