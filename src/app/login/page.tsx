// page.tsx
import Form from './form'
import prisma from '@/db'
import { revalidatePath } from 'next/cache'
import { redirect} from 'next/navigation'


const page = async () => {

  const loginUser = async (formData: FormData) => {
    'use server'

    const user = formData.get('user')?.valueOf()
    const password = formData.get('password')?.valueOf()

    if (typeof user !== 'string' || user.length === 0) {
      throw new Error('User is not a string or is empty')
    }

    if (typeof password !== 'string' || password.length === 0) {
      throw new Error('Password description is required')
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: user
      }
    })

    if (!existingUser) {
      throw new Error('User dont exist')
    }

    if (existingUser.password !== password) {
      throw new Error('Password dont match')
    }

    const updateUser = await prisma.user.update({
      where: {
        email: user
      },
      data: {
        logged: true
      },
      select: {
        id: true
      }
    })

    const userId = updateUser.id;
    revalidatePath('/', 'layout')
    // revalidatePath('/navbar')
    // revalidatePath('/')
    
    return userId

  }


  return (
    <>
    <Form onSubmit={loginUser} />    
    </>
    
  )
}

export default page

