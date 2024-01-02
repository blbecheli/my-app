import { redirect } from "next/navigation"
import login from "../../hook/login"
import Edit from "./edit"
import prisma from "@/db"


const page = async () => {
    const loginU = await login()

    if (loginU == false) redirect('/login')

    const profileUpdate = async (formData: FormData) => {
        'use server'	
        const name = formData.get('name')?.valueOf()
        const email = formData.get('email')?.valueOf()
        const password = formData.get('password')?.valueOf()
        const img = formData.get('img')?.valueOf()

        const profileDb = await prisma.user.update({
            where: {
                id: loginU?.id
            }, data: {
                name: name,
                email: email,
                password: password,
                image: img
            }
        })
        return profileDb
    }



    return (
        <div>
            <Edit data={loginU} handleSubmit={profileUpdate} />
        </div>
    )
}
export default page