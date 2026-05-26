import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { CopyRight } from "../components/CopyRight";

export default function NotFound(){

    return(
        <>
            <Header />

                <div className="flex flex-col p-50 items-center">
                    <h1 className="text-3xl">404 Page Not Found</h1>
                    <Link to="/" className="text-xl text-blue-600 font-stretch-50% py-10">Home</Link>
                </div>
            <div className="absolute inset-x-0 bottom-0 h-10">
            <CopyRight/>

            </div>    
        </>
    )
}