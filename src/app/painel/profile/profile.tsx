'use client'

// import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { Image, Input, Button } from "@nextui-org/react";

const Profile = (props) => {
    const router = useRouter()
    const handleEdit = (e) => {
        e.preventDefault()
        // console.log('edit')
        router.refresh()
        router.push("/editProfile")
    }

    return (
        <div className='flex flex-col'>
            <div className='m-auto mb-3'>
                <Image
                    width={150}
                    height={100}
                    src={props.data?.image}
                    fallbackSrc="https://via.placeholder.com/300x200"
                    alt="Profile Picture"
                    className='m-auto'
                />
            </div>
            <Input
                isDisabled
                type="text"
                label="name"
                defaultValue={props.data?.name}
                className="max-w-xs m-auto mb-3"
            />
            <Input
                isDisabled
                type="email"
                label="Email"
                defaultValue={props.data?.email}
                className="max-w-xs m-auto mb-3"
            />
            <Button color="warning" onClick={handleEdit} className='sm:w-[100px] m-auto'>
                Edit
            </Button>
            {/* <button onClick={handleEdit}>Edit</button> */}
        </div>
    )
}
export default Profile