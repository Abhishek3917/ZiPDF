import { useState,useEffect } from 'react'
import { Button } from './Button'
import { useParams } from 'react-router-dom'
import { tools } from "../Data/tool"


type FileProps={
        file:File[]
        setFile: React.Dispatch<React.SetStateAction<File[]>
        >
    }

type DownloadProps = {
    convertedpdf: Blob
}

export function DownloadPdf(
    {convertedpdf}:DownloadProps,

){    

    function handleDownload(){
        const url = URL.createObjectURL(convertedpdf)

        const a = document.createElement("a")

            a.href=url
            a.download="converted.pdf"
            a.click()
            URL.revokeObjectURL(url)
    }

    return(
        <div className='flex px-10'>
            
            <Button onClick={handleDownload}>Download</Button>
        </div>
    )
}


export function OperationUi(
        {
            file,
            // setFile,
        }:FileProps,
        
)

{  
    const { id } = useParams()  
      
    const [view, setView] = useState<string[]>([])
    const [Convertedpdf,setConvertedpdf] = useState<Blob | null>(null);

async function handleConvert(file:File[]){

    
    try{
        const currentTool =
        tools.find(tool => tool.id == id)

        if(!currentTool) return;

        const pdf = await currentTool?.converter(file,currentTool)
        // if(!pdf) return
        setConvertedpdf(pdf)     
        
        }
    catch(error){
                console.error("conversion Failed",error)
        }
    

}

    useEffect(()=>
        {
            if(file.length === 0) return
            const fileurl= file.map(url=>URL.createObjectURL(url))
            setView(fileurl)
            
            return()=>{
                fileurl.forEach(url=>URL.revokeObjectURL(url))
            }
        },[file]
    )
   
   
        return(
        <>
            <div className="
                            flex
                            flex-col
                            border
                            p-4
                            gap-6
                            rounded-xl
                            ">

            <div className="
                            flex
                            flex-wrap
                            gap-5
                            ">

        {
            view.map((url,index)=>(

                <img
                    key={index}
                    src={url}
                    alt="preview"
                    width="200"
                    className="rounded-lg"
                />

            ))
        }

    </div>

    <div className='flex gap-4 flex-row'>

        <Button
        onClick={()=>handleConvert(file)}
        >
            convert
        </Button>

        {
            Convertedpdf && (
                <DownloadPdf
                convertedpdf={Convertedpdf}
                />
            )
        }

    </div>

</div>

        </>
    )
}