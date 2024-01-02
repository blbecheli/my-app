'use client'

import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import { useRouter } from 'next/navigation'
import UserContext from "./context/userContext"


const AddFriend = (props) => {
    const router = useRouter()
    
    const [isFriend, setIsFriend] = useState(props.friend)
    // const {idUser} = useContext(UserContext)
    // console.log("O valor de isFriend é: " + isFriend)
    

    useEffect(() => {
        console.log("O valor de isFriend é: " + isFriend)
    }, [props.friend, isFriend])

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target)
        props.friendAdd(formData).catch((error) => {
            console.error(error);
        })
        router.refresh()
        router.push("/") 
    }

    const idUser = props?.login?.id
    const idUserPost = props.user.id
    // console.log("o valor de idUser é: " + idUser)
    
    return (
        <div>             
            {(idUser == null || idUser == idUserPost) ? (
                <Image src="/images/star.svg" alt="star" height={32} width={32} />
            ) : (
                isFriend == true ? (
                    <Image src="/images/userfriend.svg" alt="star" height={32} width={32} />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="user" value={idUser} readOnly />
                        <input type="text" name="userpost" value={idUserPost} readOnly />
                        <button onClick={()=> setIsFriend(true)}>
                            <Image src="/images/useradd.svg" alt="star" height={32} width={32} />                            
                        </button>
                    </form>
                )
            )}
        </div>
    )
}

export default AddFriend
