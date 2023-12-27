'use server'
import prisma from "@/db";

const getUserData = async () => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        logged: true,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (user) {
      console.log("esta é a pagina do logged " + user.id);
    }

    return user;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
};

export default getUserData;


