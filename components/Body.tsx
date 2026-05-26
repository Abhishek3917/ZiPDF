
import { Button } from "./Button";
import { useNavigate } from "react-router-dom"
export function Body(){
        const navigate=useNavigate()
    return(
        <div className="flex justify-center p-20 flex-col">
             
            <div className="flex items-center flex-col">
                    <h1 className="text-6xl gap-1.5 py-1.5 bg-linear-to-br from-zinc-500 to-white text-transparent bg-clip-text font-extrabold"> Free Online </h1>
                    <h1 className="text-7xl gap-1.5 py-1.5
                    bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold"> PDF & Image Tools</h1>
                    
                    <p className="text-xl p-2.5 font-mono tracking-tight">Convert, merge, split, and edit PDFs instantly. Resize and optimize images. No signup required. Files processed locally.</p>
                    
                    <div className="py-10 ">
                        <Button onClick={()=>navigate("/Tools_list")} >Start Converting Now</Button>                
                    </div>  

            </div>

   <div className="flex items-center gap-2.5 max-w-2xl w-full mx-auto text-lg py-5">
                        <div className="flex-1 h-px bg-zinc-600 "></div>
                        <p>PDF TOOLS</p>
                        <div className="flex-1 h-px bg-zinc-600"></div>
                    </div>
        </div>
    )

}