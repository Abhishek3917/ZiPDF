import { Button } from "./Button";
import { FileText } from "lucide-react";
import { useRef } from "react";


type FileProps = {
    setFile: React.Dispatch<React.SetStateAction<File[]>>
}


export function UploaduiCard(
{
    setFile
}:FileProps
){

const inputFile = useRef<HTMLInputElement>(null)


const handleChange = (
e:React.ChangeEvent<HTMLInputElement>
)=>{

    if(!e.target.files) return;


    setFile(prev=>[
        ...prev,
        ...Array.from(e.target.files!)
    ])

}



return(

<div className=" flex justify-center px-4 py-10
">


<div
className=" w-full max-w-sm aspect-square border p-6 bg-slate-900 flex flex-col rounded-3xl shadow-lg shadow-cyan-500/50 hover:scale-105 transition duration-300
"
>


<div className=" flex justify-center
">

<FileText/>

</div>



<div className=" flex-1 flex items-center flex-col justify-center text-center
">


<h1 className=" font-mono text-xl sm:text-2xl text-slate-300 font-bold
">

Drag & Drop

</h1>


<p>
or click below to browse
</p>


</div>



<div className=" flex flex-col gap-3 items-center
">


<Button
onClick={() =>
inputFile.current?.click()
}
>

Choose Image

</Button>


<input

ref={inputFile}

type="file"

multiple

accept="image/*"

onChange={handleChange}

className="hidden"

/>


</div>



<div className=" text-sm text-center mt-4 space-y-1
">


<p>Instant PDF Generation</p>
<p>100% Private</p>
<p>No Ads. No Watermark</p>
<p>Works Fully Offline</p>


</div>


</div>


</div>

)

}