

type ButtonProps={
    children:React.ReactNode;
     onClick?: () => void;
}

export function Button({children,onClick}:ButtonProps){

    return(
<>
           <button onClick={onClick}
                 className=" bg-linear-to-r from-blue-500 to-purple-500 text-amber-50 duration-300 hover:ease-in-out hover:-translate-y-1.5 rounded-3xl px-5 py-3 text-lg ">{
                    children
                 }
            </button>   
</>  
    )
}