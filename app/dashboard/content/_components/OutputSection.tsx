"use client";
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface PROPS{
  aiOutput:string;
}
function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef(null);
 useEffect(() => {
  const editorInstance = editorRef.current.getInstance();
  editorInstance.setHTML(aiOutput); // Use setHTML for HTML content
}, [aiOutput]);
  return (
    <div className='bg-white shadow-lg border rounded-lg'> 
    <div className='flex justify-between items-center p-5'><h2 className='text-lg font-medium'>YOUR RESULTS</h2>
    <Button className='flex gap-2'onClick={()=>navigator.clipboard.writeText(aiOutput)}><Copy className='w-4 h-4'/>Copy</Button>
    </div>
    <Editor
    ref={editorRef}

    initialValue="Your Result Will Appear Here!"
    //previewStyle="vertical"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  /></div>
  )
}

export default OutputSection