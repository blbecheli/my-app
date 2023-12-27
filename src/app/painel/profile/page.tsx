import getUserData from "@/app/hook/logged"
import Layout from "../page"
import { redirect } from 'next/navigation'
import prisma from "@/db"
import Image from 'next/image';


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
    <div>
    {profile?.image == "" ? (<Image src="/images/profile.svg" alt="" width={100} height={100} />) :    
    <img src={profile?.image} alt="my picture" />
    }
    <p>{profile?.name}</p>
    <p>{profile?.email}</p>    
    </div>
    </Layout>
  )
}
export default page