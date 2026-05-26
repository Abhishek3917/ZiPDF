import { CopyRight } from "../components/CopyRight";
import { Header } from "../components/Header"
import BlogContent from '../components/BlogConverter'

export default function Blog() {
  return (
      <>
    <Header/>
    <div className="flex ">
      <h1>About This Blog</h1>
      <BlogContent/>   
    </div>
    <div className="absolute inset-x-0 bottom-0 h-10">
    <CopyRight/>
    </div>
      </>
  );
}