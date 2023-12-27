
import Logout from './logout'
import prisma from '@/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import getUserData from "@/app/hook/logged"
import { cookies } from "next/headers";


const page = async () => {
'use server'
    const loginUser = async (formData: FormData) => {
        'use server'

        const login = await getUserData()

        await prisma.user.update({
            where: {
                id: login?.id
            },
            data: {
                logged: false
            }
        })
        
            cookies().delete('userid')
          
      
        //   async function create() {
        //     cookies().set('name', '')
        //   }

              
        // revalidatePath('/');        
        revalidatePath('/', 'layout')
        redirect('/')
        
    }

    return (
        <Logout onSubmit={loginUser} />
    )
}

export default page
