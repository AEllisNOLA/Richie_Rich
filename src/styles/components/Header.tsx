import logo from "../../img/richie-rich-high-resolution-logo-transparent.png";
import Image from "next/image"
import { HiOutlineSearchCircle } from "react-icons/hi";
import { useSession, getSession, signIn, signOut } from "next-auth/react"





const Header = () => {
    const { data: session } = useSession();

    return <div className="w-full h-20 bg-navy sticky top-0 z-50">
        <div className="w-full h-full mx-auto inline-flex items-center justify-between gap-1: md1:gap-3 px-4" >
            {/* LOGO */}
            <div className="px-2 cursor-pointer flex items-center justify-center">
                <Image className="w-28 mt-1 object-cover pr-5" src={logo} alt="Richie Rich logo" />
            </div>
            {/* SEARCH */}

            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
                <input className="w-full h-full pl-10 rounded-md px-2 border-[3px] border-transparent outline-none focus-visible:border-rr_gold" type="text" />
                <span className="w-12 h-full text-black text-2xl flex items-center justify-center absolute left-0 rounded-tr-md rounded-br-md">
                    <HiOutlineSearchCircle />
                </span>
            </div>
            {/* SIGN IN */}



            <div className="text-xs text-gray-100 flex inline-flex px-2 border border-transparent h-[70%]">
                {session ? (
                    <div className="inline-flex items-center justify-between gap-5: md1:gap-3 px-4">
                        <img src={session?.user?.image!} alt="user avatar" className="w-12 h-12 rounded-full"></img>

                        <h2 className="pl-3 text-md"> {session?.user?.name}</h2>



                        <button className="pl-5 text-md font-bold" onClick={() => signOut()}>Sign Out</button>
                    </div>
                ) : (
                    <button className="pl-5 text-md font-bold" onClick={() => signIn()}>Sign In</button>
                )}
            </div>

            {/* WATCHING ???*/}
            {/* NOTIFICATIONS ??? */}
            {/* ACCOUNT ??? */}

        </div>

    </div>
}

export default Header