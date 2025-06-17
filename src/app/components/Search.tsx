import Image from "next/image"
import iconSearch from '@/assets/icon-search.svg'

export function Search() {              
    return (
        <div className="flex items-center gap-4">
            <Image src={iconSearch} alt=""/>
            <input type="text" className="bg-transparent outline-none text-white pr-3" placeholder="Buscar"/>
        </div>    
    )
}