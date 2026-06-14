import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { tools } from "../Data/tool"; 


type ToolsCardProps={
    id:string,
    title:string,
    desc:string,
}


function ToolsCard({id,title,desc}:ToolsCardProps){

return (

<Link
to={`/tools/${id}`}

className=" bg-slate-900 w-full p-8 rounded-3xl shadow-lg hover:bg-slate-700 transition duration-300 hover:scale-105
"

>

<FileText />


<h1
className=" mt-3 text-2xl font-semibold text-slate-100
"
>
{title}
</h1>


<h2
className=" mt-2 text-slate-300 text-sm
"
>
{desc}
</h2>


<div
className=" mt-5 text-blue-500
"
>
Use Tool
</div>


</Link>

)

}



export function ToolsGrid(){

return (

<div
className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 max-w-7xl mx-auto
"
>


{
tools.map(tool=>(

<ToolsCard

key={tool.id}

id={tool.id}

title={tool.title}

desc={tool.desc}

/>

))

}


</div>

)

}