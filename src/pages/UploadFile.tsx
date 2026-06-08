import { Header } from "../components/Header";
import { UploaduiCard } from "../components/UploaduiCard";
import { useState } from "react";
import {OperationUi } from '../components/OperationUi'

export default function UploadFile(){
    const [file,setFile]=useState<File[]>([])
    return(
        <>
        <Header/>
            <div>
                {
                  file.length===0?(
                    <UploaduiCard file={file}
                    setFile={setFile}/>
                  )
                  :
                  (
                    <OperationUi 
                        file={file}
                        setFile={setFile}
                    />
                    
                  )

                }
            </div>
        </>
    )
}