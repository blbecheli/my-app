import prisma from "@/db";
import login from "@/hook/login";
import useFriends from "@/hook/friends";

const page = async () => {

   const loginUser = await login();
   const friends = await useFriends(); 

   
  return (
    <div>
      <p>Usuário: {loginUser.id}</p>
      <p>Amigos:</p>
      {friends.map((friend) => (
        <div key={friend.id}>
          <p>{friend.name}</p>
          <p>{friend.image}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
