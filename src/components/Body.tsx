import { Button } from "./Button";
import { useNavigate } from "react-router-dom"

export function Body(){

    const navigate = useNavigate()

    return(
        <div
        className=" flex justify-center flex-col px-4 py-12 sm:p-20
        "
        >
             
            <div
            className=" flex items-center flex-col text-center
            "
            >

                <h1
                className=" text-4xl sm:text-6xl py-1.5 bg-linear-to-br from-zinc-500 to-white text-transparent bg-clip-text font-extrabold
                "
                >
                    Free Online
                </h1>


                <h1
                className=" text-4xl sm:text-7xl py-1.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold
                "
                >
                    PDF & Image Tools
                </h1>


                <p
                className=" text-base sm:text-xl p-3 max-w-3xl font-mono tracking-tight
                "
                >
                    Convert, merge, split, and edit PDFs instantly.
                    Resize and optimize images.
                    No signup required.
                    Files processed locally.
                </p>


                <div className="py-8 sm:py-10">

                    <Button
                    onClick={()=>navigate("/Tools_list")}
                    >
                        Start Converting Now
                    </Button>

                </div>

            </div>


            <div
            className=" flex items-center gap-2 max-w-2xl w-full mx-auto text-sm sm:text-lg py-5
            "
            >

                <div className="flex-1 h-px bg-zinc-600"/>

                <p>
                    PDF TOOLS
                </p>

                <div className="flex-1 h-px bg-zinc-600"/>

            </div>


        </div>
    )
}