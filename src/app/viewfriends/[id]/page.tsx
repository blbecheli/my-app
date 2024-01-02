import Link from "next/link"
import prisma from "@/db"
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import FriendsDetails from "./friendsDetails"


const page = async ({ params }: { params: { id: string } }) => {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
    select: { id: true, name: true, email: true, image: true, createdAt: true}
  })

  console.log(user?.id)

  const dateDb = user?.createdAt
  const date = new Date(dateDb)
  const formatoData = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric',
      // hour12: false
  };
  const dataFormatada = date.toLocaleDateString('en-CA', formatoData)

  return (
    <div>
      <FriendsDetails friendsDetails = {user} date = {dataFormatada}/>    
    </div>
  )
}
export default page