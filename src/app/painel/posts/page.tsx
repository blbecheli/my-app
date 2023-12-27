import prisma from "@/db";
import getUserData from "../../hook/logged";
import Layout from "../page";

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
        <div className="disabled">
            {posts.length == 0 ? (<p>There is no posts</p>) :
            posts.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.content}</p>                    
                    <img src={post.image} alt="image" />
                </div>
            ))}
        </div>
        </Layout>
    );
};

export default Myposts;
