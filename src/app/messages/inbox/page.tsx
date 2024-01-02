'use server';

import prisma from "@/db";
import login from "@/hook/login";
import Inbox from "./inbox";
import { format } from 'date-fns';
import Layout from "../page";


const page = async () => {
  'use server';
  const idLogin = await login();

  const messages = await prisma.message.findMany({
    where: {
      idFriend: idLogin?.id,
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

  const friends = async (idfriend: string) => {
    'use server';
    const prismaDb = await prisma.user.findUnique({
      where: {
        id: idfriend,
      },
      select: {
        name: true,
        image: true,
      },
    });
    return prismaDb;
  };
  
  const messagesArray = await Promise.all(
    messages.map(async (message) => {
      const friend = await friends(message.idFriend);
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
      <Layout>
      <Inbox messages={messagesArray} />
      </Layout>
    </div>
  );
};

export default page;
