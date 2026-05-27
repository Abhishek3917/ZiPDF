import { useState,useEffect } from 'react'
import {Header} from '../components/Header'

type FileProps={
        file:File[]
        setFile: React.Dispatch<React.SetStateAction<File[]>
        >
    }


export function OperationUi(
        {
            file,
            setFile,
        }:FileProps
)

{  
    const [view, setView] = useState<string | null>(null);

    useEffect(()=>
        {
            if(!file[0]) return;
            const fileurl= URL.createObjectURL(file[0])
            setView(fileurl)
            
            return()=>{
                URL.revokeObjectURL(fileurl)
            }
        },[file]
    )
   
   
    {<Header/>}
        return(
        <>
            {
                view &&(
                    <img src={view} alt="hello" width="400" height="400" />
                )
            }            

        </>
    )
}
