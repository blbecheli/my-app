// Em um arquivo chamado useFriends.ts

import prisma from '@/db';
import login from '@/hook/login';

interface Friend {
  id: string;
  name: string | null;
  image: string;
  email: string;
}

const useFriends = async () => {

  const loginUser = await login();

  if (!loginUser) {
    return false;
  }

  const friendData = await prisma.friend.findMany({
    where: {
      OR: [
        { friendId: loginUser.id },
        { userId: loginUser.id },
      ],
    },
    select: {
      id: true,
      userId: true,
      friendId: true,
      idUser: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true,
        },
      },
      idFriend: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true,
        },
      },
    },
  });

  const filteredFriends = friendData
    .filter(
      (friend) => loginUser.id === friend.userId || loginUser.id === friend.friendId
    )
    .map((friend) => {
      if (loginUser.id === friend.userId) {
        return {
          id: friend.idFriend.id,
          name: friend.idFriend.name,
          image: friend.idFriend.image,
          email: friend.idFriend.email,
        };
      } else if (loginUser.id === friend.friendId) {
        return {
          id: friend.idUser.id,
          name: friend.idUser.name,
          image: friend.idUser.image,
          email: friend.idUser.email,
        };
      }
      throw new Error("Invalid friend details");
    });

  const uniqueFriends = Array.from(new Set(filteredFriends.map((friend) => friend.id))).map(
    (id) => filteredFriends.find((friend) => friend.id === id)!
  );

  if (uniqueFriends.length === 0) {
    return false;
  } else {
    return uniqueFriends;  }
}

export default useFriends