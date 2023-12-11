import Form from './form'
import prisma from '@/db'
import { redirect } from 'next/navigation'


const page = () => {    

    const AddUser = async (formData: FormData) => {
        'use server'

        const user = formData.get('user')?.valueOf()
        const email = formData.get('email')?.valueOf()
        const password = formData.get('password')?.valueOf()
        const password2 = formData.get('password2')?.valueOf()

        if (typeof user !== 'string' || user.length === 0) {
            throw new Error('User is not a string or is empty')
        }

        if (typeof password !== 'string' || password.length === 0) {
            throw new Error('Password description is required')
        }

        if (typeof email !== 'string' || email.length === 0) {
            throw new Error('Note description is required')
        }

        if (typeof password2 !== 'string' || password2.length === 0 || password2 !== password) {
            throw new Error('Password dont match')
        }

        // Verificar se o e-mail já existe no banco de dados
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (existingUser) {
            throw new Error('User already exist')
        }

        await prisma.user.create({
            data: {
                name: user,
                email: email,
                password: password,
                logged: true,
            }
        })



        redirect('/')
    }

    return (
        <div>
            <Form onSubmit={AddUser} />
        </div>
    )
}
export default page