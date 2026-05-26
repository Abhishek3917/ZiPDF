import { Zap, ShieldCheck, Ban, Smartphone } from "lucide-react"

const features = [
  { id:"1",
    icon:Zap,
    title: "Fast & Reliable Conversion",
    desc: "Our engine processes files instantly. Whether you have one photo or a batch of images, convert them to PDF in seconds without quality loss."
  },
  { id:"2",
    icon:ShieldCheck,
    title: "Secure & Private Processing",
    desc: "Your files never leave your browser. We use local processing to ensure your data remains 100% private and secure."
  },
  { id:"3",
    icon:Smartphone,
    title: "Mobile Optimized",
    desc: "Works perfectly on Android and iPhone. Convert photos to PDF directly from your mobile gallery without installing any apps."
  },
  { id:"4", 
    icon:Ban,
    title: "Free Forever",
    desc: "No hidden costs, no watermarks, and no sign-up required. Enjoy unlimited conversions for free."
  }
];

export function Footer(){

    return(
        <div className="flex flex-col items-center justify-between py-15 ">
            <h1 className="text-4xl font-bold">Why ZiPDF?</h1>
            <p className="text-2xl py-2">In today's digital world, you need tools that are fast, secure, and easy to use. We process</p>
            <p className="text-lg">everything in your browser, so you never have to worry about privacy.</p>
           
            <div className="grid grid-cols-2 gap-10 py-10 px-40">
                {features.map((features) => {
                    const Icon=features.icon;
                    return(
                    <div key={features.id} className="p-6 rounded-2xl">
                            <Icon className="font-bold text-2xl mb-2"/>{features.title}
                        <p className="text-xl">{features.desc}</p>
                    </div>
)})}
            </div>
                
        </div>
        
                
    )

}

