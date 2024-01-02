import Link from "next/link"
import prisma from "@/db"
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Edit from "./edit"

const page = async ({ params }: { params: { id: string } }) => {
    'use server'
    const post = await prisma.post.findUnique({
        where: { id: params.id },
        select: { title: true, content: true, image: true, id: true }
    })

    const handlePost = async (formData: FormData) => {
        'use server'
        const title = formData.get('title')?.valueOf()
        const content = formData.get('content')?.valueOf()
        const image = formData.get('image')?.valueOf()
        const id = formData.get('id')?.valueOf()

        const postDb = await prisma.post.update({
            where: {
                id: id
            }, data: {
                title: title,
                content: content,
                image: image
            }
        })
        return postDb
    }

    return (
        <div>
            <Edit post={post} handlePost={handlePost} />
        </div>
    )
}
export default page