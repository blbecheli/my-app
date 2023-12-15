// page.tsx
import Logout from './logout'
import prisma from '@/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import getUserData from "@/app/hook/logged"



const page = async () => {

    const loginUser = async (formData: FormData) => {
        'use server'

        const login = await getUserData()

        await prisma.user.update({
            where: {
                id: login.id
            },
            data: {
                logged: false
            }
        })


        revalidatePath('/');
        revalidatePath('/navbar');
        redirect('/');
    }

    return (
        <Logout onSubmit={loginUser} />
    )
}

export default page