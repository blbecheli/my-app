import prisma from "@/db"
import getPosts from "@/hook/post"
import login from "@/hook/login"
import useFriends from "@/hook/friends"
import ListFront from "./ListFront"


const getIdFriendArray = async () => {
    'use server'
    const idFriend = await useFriends()
    const idFriendArray = idFriend ? idFriend.map((friend) => friend.id) : false;
    return idFriendArray;
};


const List = async () => {
    'use server'

    //Verifies if the user is logged in
    const loginUser = await login()

    //Get all posts from the database
    const post = await getPosts()

    //Check the friends of the user
    const idFriend = await useFriends()


    const getId = await getIdFriendArray()

    const areFriends = async (idUser: string) => {
        'use server'
        const idFriendArray = await getIdFriendArray()
        if (await idFriendArray.length < 1) {
            console.log("O tamanho do array é menor que 1" + idFriendArray.length);
            return false
        } else if (await idFriendArray.includes(idUser)) {
            console.log("O id do usuario está no array - Line 48: " + idFriendArray.includes(idUser));
            return true
        } else {
            console.log("O id do usuario não está no array - line 51: " + idFriendArray.includes(idUser));
            return false
        }
    }

    const addFriend = async () => {
        'use server'
        if (loginUser !== false && idFriend == false) {
            return true
        } else {
            return false
        }
    }

    const addFriends = async (friendId: any, userId: any) => {
        'use server'       

       await prisma.friend.create({
            data: {
                friendId: friendId,
                userId: userId
            }
        })
    }

    const delFriends = async (userId: any) => {
        'use server'        

        await prisma.friend.deleteMany({
            where: {
                OR: [
                    {
                        userId: userId
                    },
                    {
                        friendId: userId
                    }
                ]
            }
        })
    }

    return (
        <>
            <ListFront post={post} addFriend={addFriend} addFriends={addFriends} areFriends={areFriends} getIdFriendArray={getId} loginUser={loginUser?.id} delFriends = {delFriends} />
        </>        
    )
}
export default List
