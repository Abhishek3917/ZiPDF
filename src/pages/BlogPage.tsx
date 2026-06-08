import { CopyRight } from "../components/CopyRight";
import { Header } from "../components/Header"
import BlogContent from '../components/BlogConverter'

export default function Blog() {
  return (
      <>
    <Header/>
    <div className="flex box-border border p-10 lg:-translate-x-0.5 md:translate-x-15 lg:translate-y-10 bg-slate-900 flex-col rounded-2xl translate-y-5" >
      <div className="page-font-nullifier">
      <h1>About This Blog</h1>
      <BlogContent/> 
      </div>
                
  
    </div>
    <div className="fixed inset-x-0 bottom-0 h-10">
    <CopyRight/>
    </div>
      </>
  );
}