import Link from "next/link"
import prisma from "@/db"
import { redirect } from 'next/navigation'
import getUserData from "../../hook/logged"
import Post from "./post"


const page = async () => {   

  const logIn = await getUserData()
  

  const PostAdd = async (formData: FormData) => {
    'use server'

    const title = formData.get('title')?.valueOf()
    const content = formData.get('content')?.valueOf()    
    const image = formData.get('image')?.valueOf()

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is not a string or is empty')
    }

    if (typeof content !== 'string' || content.length === 0) {
      throw new Error('Content is not a string or is empty')
    }

    if (logIn?.id == null) {
      redirect('/')
    }
       

    if (typeof image !== 'string' || image.length === 0) {
      throw new Error('image is not a string or is empty')
    }      

    await prisma.post.create({
      data: {
        title: title,
        content: content,
        idUser: logIn.id,
        image: image
      }
    })      
    
    redirect('/');
  }
  

  return (
    <Post onSubmit = {PostAdd}/>
  );
}


export default page;