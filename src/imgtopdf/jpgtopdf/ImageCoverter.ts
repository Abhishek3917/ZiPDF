import jsPDF from "jspdf";

// (inner) addImage(imageData, format, x, y, width, height, alias, compression, rotation)
type Tool = {
    id: string
    title: string
    desc: string
    format: string
}
export async function JpgtoPdf(
    file: File[],tool:Tool        
): Promise<Blob> {

if (!file[0]) {
    throw new Error("Please select an image file first.")
}

const docs = new jsPDF()

for (let i=0;i<file.length;i++)
{
    const imagefile = file[i]

    const imgData = await readFileAsDataURL(imagefile)
    if (i > 0) {
            docs.addPage()
        }
        docs.addImage(imgData,tool.format,15, 40, 180, 160)
}



const pdfblob = docs.output("blob")
return pdfblob
}

function readFileAsDataURL(file:File):Promise<string>{

    return new Promise((resolve, reject) => {
        
        const reader= new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            resolve(
                reader.result as string
            )
        }

        reader.onerror = reject
    })

}
