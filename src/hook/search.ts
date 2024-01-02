import prisma from "@/db";
import { v4 as uuidv4 } from 'uuid';

const searchP = async (search: string) => {
    const searchId = uuidv4()

    const result = await prisma.post.findMany({
        where: {
            title: {
                contains: search
            }
        },
        select: {
            id: true,            
            idUser: true,
        }
    });

    await Promise.all(
        result.map(async (result) => {
          await prisma.search.create({
            data: {
              searchId: searchId,
              idUser: result.idUser,
              idPost: result.id,
            },
          });
        })
      );

      return searchId
};

export default searchP;


