import search from "./icons/search.svg";
import notification from "./icons/notification.svg";
import profile from "./icons/profile.png";


import Image from "next/image";

export default function Navigation() {
    return (
        <div>
            <nav className="flex justify-between py-3 w-full">
                <h3 className="text-black text-2xl font-bold">Dashboard</h3>
                <div className="flex">
                    <div className="flex bg-white rounded-lg px-2">
                        {/* search-bar */}
                        <input type="text" />
                    <Image src={search} width={'50px'} />    
                    </div>
                    <div className="flex">
                        {/* profile */}
                        <Image src={notification} width={'50px'} className="ml-3" /> 
                        <Image src={profile} width={'50px'} className="ml-3"/> 
                    </div>
                </div>

            </nav>

        </div>

    )
}