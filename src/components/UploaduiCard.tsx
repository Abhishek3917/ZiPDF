import { Button } from "./Button";
import { FileText, } from "lucide-react";
import { useRef } from "react";

type FileProps={
    file:File[],
    setFile:React.Dispatch<React.SetStateAction<File[]>
    >
}



export function UploaduiCard(
    {
        file,
        setFile,
    }:FileProps
)

{
    const inputFile = useRef<HTMLInputElement>(null)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(!e.target.files) return;
        setFile([...file, ...Array.from(e.target.files)])
        const currentLoc = window.location.href 
        console.log(currentLoc)        
    }
    
    return(
        <>
        <div>
        <h1></h1>
        </div>
        <div className="flex p-20">
            
            <div className="flex box-border size-96 border p-10 lg:translate-x-125 md:translate-x-15 lg:translate-y-10 bg-slate-900 flex-col rounded-4xl shadow-lg shadow-cyan-500/50 hover:scale-105 hover:bg-slate-950 delay-150 duration-300 ease-in-out">
                <div className="flex justify-center gap-1">
                    <FileText/>
                </div>
                <div className="flex flex-1 items-center   flex-col">
                    <h1 className="font-mono text-2xl text-slate-300 font-bold">Drag & Drop</h1>
                    <p className="text-lg">or click below to browse</p>
                </div>
                <div className="flex justify-between items-center flex-col lg:-translate-y-10 sm:-translate-y-40 gap-2">
                    <Button onClick={() => inputFile.current?.click()}>Choose Image</Button>

                <input ref={inputFile} type='file' multiple onChange={handleChange} className="hidden"></input>
                    
                </div>
                
                <div className="flex flex-col items-center lg:px-13 lg:-translate-y-5 sm:-translate-y-40 gap-2">
                    <p>Instant PDF Generation </p>
                    <p>100% Private</p>
                    <p>No Ads. No Watermark</p>
                    <p>Works Fully Offline</p>
                </div>
            </div>
        </div>
        </>
    )

}

