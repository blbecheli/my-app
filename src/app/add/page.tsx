import Image from "next/image"
import Link from "next/link"
import prisma from "@/db"
import { redirect } from 'next/navigation'
import cloudinary from "@/cloudinary"
import getUserData from "../hook/logged"
import Post from "./post"
import { revalidatePath } from 'next/cache'



const page = async () => {   

  const logIn = await getUserData()
  const name = process.env.NEXT_PUBLIC_CLOUD_NAME

  const PostAdd = async (formData: FormData) => {
    'use server'

    const title = formData.get('title')?.valueOf()
    const content = formData.get('content')?.valueOf()
    const password = formData.get('password')?.valueOf()

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('User is not a string or is empty')
    }

    if (typeof content !== 'string' || content.length === 0) {
      throw new Error('User is not a string or is empty')
    }

    if (logIn?.id == null) {
      redirect('/')
    }

    if (typeof password !== 'string' || password.length === 0) {
      throw new Error('Password description is required')
    }
    

    await prisma.post.create({
      data: {
        title: title,
        content: content,
        idUser: logIn.id, // Adicione a propriedade idUser com um valor vazio ou defina o valor apropriado
        image: '' // Adicione a propriedade image com um valor vazio ou defina o valor apropriado
      }
    })
     
    

    revalidatePath('/');
    revalidatePath('/navbar');
    redirect('/');
  }
  

  return (
    <Post onSubmit = {PostAdd}/>
  );
}


export default page;