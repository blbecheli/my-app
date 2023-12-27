import prisma from "@/db";

const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({      
      select: {        
        title: true,
        content: true,  
        createdAt: true,
        idUser: true,
        image: true,         
      }
    });
    return posts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
};

export default getPosts;
