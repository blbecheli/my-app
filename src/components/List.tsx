'use server'
import Image from "next/image"
import prisma from "@/db"
import getUserData from "@/app/hook/logged"
import logged from "@/app/hook/login"
import getPosts from "@/app/hook/post"



const List = async () => {

    const getUserById = async (userId) => {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                name: true,
                image: true
            }
        });
        return user;
    };

    const post = await getPosts()
    console.log("Estes são os posts: " + post[0].idUser)



    return (
        <div className="flex flex-col">
            {post.map(async(post) => {
                const user = await getUserById(post.idUser)
                return (
                    <>
                        <div className="h-full flex flex-col my-10 m-auto border-solid rounded bg-sky-100 w-[70vw]">
                            <div className="flex m-2">
                                <div>                                    
                                    <img src={user?.image} className="w-[32px] h-[32px]" alt="" />
                                </div>
                                <div className="mx-3">
                                    <p>{user?.name}</p>                                    
                                </div>
                            </div>
                            <div className="mx-auto my-2 h-[50vh] w-[50vw] bg-cover bg-contain bg-no-repeat bg-center relative" style={{ backgroundImage: `url(${post?.image})` }}>
                                <div className="flex bg-black bg-opacity-50 text-white absolute bottom-0 m-auto w-[50vw] rounded-b-md">
                                    <div className="flex">
                                        <Image src="/images/chat.svg" alt="Favorite" width={32} height={32} />
                                        <span>5</span>
                                    </div>
                                    <div className="fill-red-700 flex">
                                        <Image src="/images/fav.svg" alt="Favorite" width={32} height={32} className="fill-red-700" />
                                        <span>12</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}

        </div>
    )
}
export default List
