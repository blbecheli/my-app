const page = async ({ params }: { params: { id: string } }) => {
    const user = await prisma.user.findUnique({
        where: { id: params.id },
        select: { id: true, name: true, email: true, image: true, createdAt: true }
    })
    return (
        <div>page</div>
    )
}
export default page