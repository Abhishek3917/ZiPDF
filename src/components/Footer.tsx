import { Zap, ShieldCheck, Ban, Smartphone } from "lucide-react"


const features = [
{
id:"1",
icon:Zap,
title:"Fast & Reliable Conversion",
desc:"Our engine processes files instantly. Whether you have one photo or a batch of images, convert them to PDF in seconds without quality loss."
},
{
id:"2",
icon:ShieldCheck,
title:"Secure & Private Processing",
desc:"Your files never leave your browser. We use local processing to ensure your data remains 100% private and secure."
},
{
id:"3",
icon:Smartphone,
title:"Mobile Optimized",
desc:"Works perfectly on Android and iPhone. Convert photos to PDF directly from your mobile gallery without installing any apps."
},
{
id:"4",
icon:Ban,
title:"Free Forever",
desc:"No hidden costs, no watermarks, and no sign-up required. Enjoy unlimited conversions for free."
}
];


export function Footer(){

return(

<div
className=" flex flex-col items-center py-10 px-4
"
>


<h1
className=" text-3xl sm:text-4xl font-bold text-center
"
>
Why ZiPDF?
</h1>


<p
className=" text-base sm:text-2xl text-center py-3 max-w-3xl
"
>
In today's digital world, you need tools that are fast,
secure, and easy to use.
</p>


<p
className=" text-sm sm:text-lg text-center max-w-2xl
"
>
Everything is processed in your browser,
so you never have to worry about privacy.
</p>



<div
className=" grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 py-10 w-full max-w-5xl
"
>


{
features.map((feature)=>{

const Icon = feature.icon;

return(

<div
key={feature.id} className=" p-5 rounded-2xl bg-slate-900 hover:bg-slate-800 transition"
>


<Icon
className="mb-3"
/>


<h2
className=" text-lg sm:text-xl font-semibold
"
>
{feature.title}
</h2>


<p
className=" text-sm sm:text-lg text-slate-300 mt-2
"
>
{feature.desc}
</p>


</div>

)

})

}


</div>


</div>

)

}