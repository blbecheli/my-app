import login from "@/hook/login";
import Layout from "../page";
import prisma from "@/db";
import Link from "next/link";
import useFriends from "@/hook/friends";

const Page = async () => {
  const idLogin = await login();

  const idFriends = await useFriends();

  return (
    <Layout>
      <div className="mt-4">
        {!idFriends ? (
          <p className="text-center">You don't have friends yet</p>
        ) : (
          idFriends.map((friend) => (
            <div key={friend.id} className="flex justify-between mb-4 px-[10vw]">
              <div className="max-w-[10vw] max-h-[100%] sm:mr-4 ml-[10vw] sm:ml-0 flex rounded-full">
                <img src={friend.image} alt={friend.name} className="max-w-full max-h-full rounded-full" />
              </div>
              <p>{friend.name}</p>
              <Link href={`/viewfriends/${friend.id}`}>
                <p className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-white hover:text-blue-500 hover:border-blue-500 border border-blue-500 w-[60px] text-center text-[.5rem]">See Details</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Page;
  