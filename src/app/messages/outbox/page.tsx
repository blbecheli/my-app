import prisma from "@/db"
import login from "@/hook/login"
import Inbox from "@/app/messages/inbox/inbox"
import { format } from 'date-fns';
import Layout from "../page";

const page = async () => {
  const idLogin = await login();

  const messages = await prisma.message.findMany({
    where: {
      idUser: idLogin?.id,
    },
    select: {
      id: true,
      content: true,
      idUser: true,
      idFriend: true,
      createdAt: true,
      friend: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  // const friends = async (idfriend: string) => {
  //   'use server';
  //   const prismaDb = await prisma.user.findUnique({
  //     where: {
  //       id: idfriend,
  //     },
  //     select: {
  //       name: true,
  //       image: true,
  //     },
  //   });
  //   return prismaDb;
  // };

  const messagesArray = await Promise.all(
    messages.map(async (message) => {
      // const friend = await friends(message.idFriend);
      const formattedDate = format(new Date(message.createdAt), 'yyyy-MM-dd HH:mm:ss');
      return {
        id: message.id,
        content: message.content,
        idUser: message.idUser,
        idFriend: message.idFriend,
        createdAt: formattedDate,
        friend: {
          name: message.friend?.name,
          email: message.friend?.email,
          image: message.friend?.image,
        },
      };
    })
  );

  return (
    <div>
      {/* {messages.map(async (message) => {
        const friend = await friends(message.idFriend);
        return (
          <div key={message.id}>
            <p>Title: {message.content}</p>
            <p>To: {friend?.name}</p>
          </div>
        );
      })} */}
      <Layout>
        <Inbox messages={messagesArray} />
      </Layout>
    </div>
  )
}
export default page