import { Link } from "react-router-dom"

export function Header(){
    return(
        <div
        className=" flex flex-col sm:flex-row items-center justify-between gap-4 p-4 px-5 sm:px-10 bg-slate-900 sticky top-0 z-50
        "
        >

            {/* Logo */}
            <div className=" flex text-3xl font-bold
            ">
                <Link 
                to="/"
                className=" text-3xl sm:text-4xl text-orange-600
                "
                >
                    ᴢɪᴘᴅꜰ
                </Link>
            </div>


            {/* Navigation */}
            <div
            className=" flex flex-wrap justify-center items-center gap-4 text-lg sm:text-xl
            "
            >

                <Link to="/">
                    Home
                </Link>

                <Link to="/Tools_list">
                    Tools
                </Link>


                <div className=" flex items-center gap-1
                ">

                    <Link to="/blog">
                        Blog
                    </Link>

                    <span className=" relative flex h-2 w-2
                    ">

                        <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75
                        "/>

                        <span className=" relative inline-flex h-2 w-2 rounded-full bg-sky-500
                        "/>

                    </span>

                </div>

            </div>

        </div>
    )
}