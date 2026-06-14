import { useState,useEffect } from 'react'
import { Button } from './Button'
import { useParams } from 'react-router-dom'
import { tools } from "../Data/tool"


type FileProps={
    file:File[]
    setFile: React.Dispatch<React.SetStateAction<File[]>>
}


type DownloadProps = {
    convertedpdf: Blob
}


export function DownloadPdf({convertedpdf}:DownloadProps){    

    function handleDownload(){

        const url = URL.createObjectURL(convertedpdf)

        const a = document.createElement("a")

        a.href=url
        a.download="converted.pdf"
        a.click()

        URL.revokeObjectURL(url)
    }

    return(
        <div className="w-full sm:w-auto">
            <Button 
            onClick={handleDownload}
            >
                Download
            </Button>
        </div>
    )
}



export function OperationUi({file}:FileProps)

{  
    const { id } = useParams()

    const [view,setView] = useState<string[]>([])
    const [Convertedpdf,setConvertedpdf] = useState<Blob | null>(null);



    async function handleConvert(file:File[]){

        try{

            const currentTool =
            tools.find(tool => tool.id === id)

            if(!currentTool) return;


            const pdf = await currentTool.converter(
                file,
                currentTool
            )

            setConvertedpdf(pdf)

        }
        catch(error){
            console.error(
                "conversion Failed",
                error
            )
        }
    }



    useEffect(()=>{

        if(file.length===0) return


        const fileurl =
        file.map(url=>URL.createObjectURL(url))


        setView(fileurl)


        return()=>{
            fileurl.forEach(
                url=>URL.revokeObjectURL(url)
            )
        }

    },[file])



return(

<div className=" w-full max-w-3xl mx-auto p-4 sm:p-6 border rounded-xl flex flex-col gap-6
">



    {/* Preview */}

    <div className=" flex flex-wrap justify-center gap-4
    ">


    {
        view.map((url,index)=>(

            <img
            key={index}
            src={url}
            alt="preview"

            className=" w-full max-w-xs rounded-lg object-contain
            "
            />

        ))
    }


    </div>



    {/* Buttons */}

    <div className=" flex flex-col sm:flex-row justify-center gap-4
    ">


        <Button
        onClick={()=>handleConvert(file)}
        >
            Convert
        </Button>


        {
        Convertedpdf &&

        <DownloadPdf
        convertedpdf={Convertedpdf}
        />

        }


    </div>


</div>

)

}