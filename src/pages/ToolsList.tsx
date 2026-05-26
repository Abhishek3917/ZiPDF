import { Header } from "../components/Header";
import { ToolsGrid } from "../components/ToolsGrid";

export default function ToolsList(){
    return(
        <><Header />
        <div className="flex flex-row p-10 ">
            
            <ToolsGrid />
        </div>
        </>
    )
}