import prisma from "@/db";

const page = async ({ params }: { params: { id: string } }) => {
  const searchResults = await prisma.search.findMany({
    where: { searchId: params.id },
    select: { id: true, idUser: true, idPost: true },
  });

  if (searchResults.length === 0) {
    return <div>Nada encontrado</div>;
  }

  return (
    <div>
      {searchResults.map(async (result) => {
        const user = await prisma.user.findUnique({
          where: { id: result.idUser },
          select: { name: true, image: true },
        });

        const post = await prisma.post.findUnique({
          where: { id: result.idPost },
          select: { title: true, content: true, image: true, id: true },
        });

        return (
          <div key={post.id}>
            <p>User: {user.name}</p>
            <p>Post Title: {post.title}</p>
            {/* Add other post information as needed */}
          </div>
        );
      })}
    </div>
  );
};

export default page;
