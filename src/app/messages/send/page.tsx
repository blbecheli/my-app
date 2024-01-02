import prisma from "@/db"
import login from "@/hook/login"
import Message from "./message";
import { redirect } from 'next/navigation'
import useFriends from "@/hook/friends";
import { user } from "@nextui-org/react";
import Layout from "../page";

const page = async () => {
  'use server'
  const idLogin = await login();
  const friends = await useFriends();

  if (!idLogin) {
    redirect('/login');
  }

  const handleMessage = async (formData: FormData) => {
    'use server'
    const content = formData.get('content')?.valueOf()
    const friend = formData.get('friend')?.valueOf()
    const friendId = formData.get('friendId')?.valueOf()

    if (typeof content !== 'string' || content.length === 0) {
      throw new Error('Content is not a string or is empty')
    }

    if (typeof friend !== 'string' || friend.length === 0) {
      throw new Error('To is not a string or is empty')
    }

    if (typeof friendId !== 'string' || friendId.length === 0) {
      throw new Error('To is not a string or is empty')
    }

    const message = async () => {
      const idLogin = await login();
      await prisma.message.create({
        data: {
          content: content,
          idUser: idLogin?.id,
          idFriend: friendId
        }
      })
    }

    await message();

    redirect('/messages');
  }

  return (
    <div>
      <Layout>
        <Message friendDetailsArray={friends} handleMessage={handleMessage} />
      </Layout>
    </div>
  )
}

export default page;
