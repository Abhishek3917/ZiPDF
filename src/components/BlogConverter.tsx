import ReactMarkdown from 'react-markdown'
import zipdf from '../../public/BlogsContent/zipdf.md?raw'


function BlogContent(){
    return (
        <div>
            <ReactMarkdown>{zipdf}</ReactMarkdown>
        </div>
    )
}

export default BlogContent