import prisma from "@/db";
import getUserData from "../../../hook/logged";
import Layout from "../page";
import Link from "next/link";
import { format } from 'date-fns';

const Myposts = async () => {
    const logIn = await getUserData();

    const posts = await prisma.post.findMany({
        where: {
            idUser: logIn?.id,
        },
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            image: true,
        },
    });

    return (
        <Layout>
            {posts.length == 0 ? (<p>There is no posts</p>) :
                posts.map((post) => (
                    <div key={post.id} className="sm:flex sm:mb-[2rem] h-fit sm:border-r-4 sm:border-solid justify-between mt-[3rem] ml-[10vw] sm:ml-[2vw]">
                        <div className="max-w-[50vw] max-h-[100%] sm:mr-4 sm:border-r-4 sm:border-solid ml-[10vw] sm:ml-0" >
                            <img src={post.image} alt="image" className="max-w-full max-h-full" />
                        </div>
                        <div className="sm:max-w-[30vw] sm:pr-[5vw] text-center sm:text-left">
                            <p className="mb-2">Title: {post.title}</p>
                            <p className="mb-2">Content: {post.content}</p>
                            <p className="mb-2">Created at: {format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm:ss')}</p>
                            <Link href={`/editPost/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-white hover:text-blue-500 hover:border-blue-500 border border-blue-500">Edit post</Link>
                        </div>
                    </div>
                ))}

        </Layout>
    );
};

export default Myposts;
