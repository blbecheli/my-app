import prisma from "@/db";

const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        idUser: true,
        image: true,        
        user: {
          select: {
            name: true,
            image: true,            
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  } catch (error) {
    console.error("Error to find the posts:", error);
    throw error;
  }
};

export default getPosts;
