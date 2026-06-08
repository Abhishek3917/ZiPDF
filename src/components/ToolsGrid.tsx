import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { tools } from "../Data/tool"; 


type ToolsCardProps={
    id:string,
    title:string,
    desc:string,
   
}

function ToolsCard({id,title, desc}:ToolsCardProps) {
  // console.log(id)
  return (
        <Link key={id} 
        to={`/tools/${id}`} 
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
                
                key={tool.id}
                id={tool.id}                 
                title={tool.title}
                desc={tool.desc}         
                />
        )}
                
    </div>

    
  );
}
