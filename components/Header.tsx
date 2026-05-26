import { Link } from "react-router-dom"
export function Header(){
    return(
        <div className="flex flex-row gap -4 items-center justify-between p-4 px-10 top-1 bg-slate-900 sticky" >
            <div className="flex flex-row gap-5 text-3xl font-bold">
                <Link to='/' className="text-4xl text-orange-600"  > ᴢɪᴘᴅꜰ </Link>
            </div>
            <div className="flex flex-row items-end gap-4 px-10 text-xl" >
                <Link to='/Ui'>    Home        </Link>
                <Link to='/Tools_list'>    Tools   </Link>
                {/* <Link to='#'>    Image tool  </Link> */}
                <div className="flex items-center gap-1">
                    <Link to="/blog">Blog</Link>
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
                    </span>
                </div>


            </div>
        </div>
    )
}