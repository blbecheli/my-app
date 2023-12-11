import prisma from "@/db";

export const getUserData = async () => {
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
console.log("esta é a pagina do logged " + user.id);
    return user;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
};


