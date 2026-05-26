import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

type ToolsCardProps={
    title:string,
    desc:string,
    ref:string
}

const tools = [
  { id: "1",title: "JPG to PDF", desc: "Convert JPG, JPEG, PNG and photos to PDF.", ref:"/tools/jpg-pdf"},
  { id: "2",title: "PNG to PDF", desc: "Turn PNG screenshots into clean PDFs."    , ref:"/tools/png-pdf"},
  { id: "3",title: "WEBP to PDF", desc:"Convert WEBP graphics and exports to PDF.", ref:"/tools/webp-pdf"},
  { id: "4",title: "BMP to PDF" ,desc:"Package bitmap images in a portable PDF."  , ref:"/tools/bmp-pdf"},
];


function ToolsCard({title, desc,ref}:ToolsCardProps) {
  return (
        <Link to={ref} 
        className="bg-slate-900 bg-neutral-primary-soft block max-w-sm p-10 rounded-base shadow-xs hover:bg-neutral-secondary-medium transition delay-100 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 hover:bg-slate-700 rounded-3xl">

           <FileText />
            <h1 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{title}</h1>
            <h2 className="text-body">{desc}</h2>
            <p className="underline-offset-1"></p>
            <div className="flex p-4 text-blue-600"> Use Tool</div>
            
        </Link>
  )
}

export function ToolsGrid() {
  return (
    <div className="flex flex-row gap-3 rounded-3xl shadow-lg shadow-cyan-500/50 px-4">
        {tools.map(tool=>
            <ToolsCard 
                // icon={tool.icon}
                key={tool.id}                
                title={tool.title}
                desc={tool.desc}
                ref={tool.ref}
                />
        )}
    </div>

    
  );
}

