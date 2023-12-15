import prisma from "@/db"

const page = async() => {
    
        const users = await prisma.user.findMany()
        return (
            <div>
                {users.map((user) =>
                    <div key={user.id}>
                        <p key={user.id}>{user.id}</p>
                        <p>{user.email}</p>
                        <p>{user.name}</p>
                        <p>{user.password}</p>
                        <p>{user.createdAt.toString()}</p>
                        <p>{user.logged.toString()}</p>
                        <br />
                    </div>
                )}
            </div>
        )
    }
export default page