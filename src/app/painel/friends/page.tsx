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
          <>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 w-1/6"></th>
                  <th className="py-2 px-4 border-b border-gray-300">Name</th>
                  <th className="py-2 px-4 border-b border-gray-300">Details</th>
                </tr>
              </thead>
              <tbody>
                {idFriends.map((friend) => (
                  <tr key={friend.id}>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      <img src={friend.image} alt="" width={50} height={50}/>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">{friend.name}</td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      <Link href={`/viewfriends/${friend.id}`}>
                        <p className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-white hover:text-blue-500 hover:border-blue-500 border border-blue-500 w-[60px] text-center text-[.5rem]">See</p>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Page;
