import prisma from "@/db"

const page = async () => {

    const lastSearch = await prisma.search.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: 1,
        select: {
            idUser: true,
            idPost: true
        }
    }
    )


    return (
        <div>page</div>
    )
}
export default page