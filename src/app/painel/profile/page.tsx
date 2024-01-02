import getUserData from "@/hook/logged"
import Layout from "../page"
import { redirect } from 'next/navigation'
import prisma from "@/db"
import Profile from "./profile"



const page = async () => {

  const login = await getUserData()

  if (login == null) {
    redirect('/')
  }

  const profile = await prisma.user.findUnique({
    where: {
      id: login?.id
    },
    select: {
      name: true,
      email: true,
      image: true,
    }

  })

  return (
    <Layout>
      <Profile data={profile}/>
    </Layout>
  )
}
export default page