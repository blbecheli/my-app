'use client'

import { useState } from "react"
// import Image from "next/image"
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation'
import { Image, Input, Button } from "@nextui-org/react";
import Link from "next/link";


const edit = (props) => {
    const router = useRouter()
    const [resource, setResource] = useState(props.data.image)
    // console.log(resource);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        props.handleSubmit(formData).catch((error: any) => {
            console.log(error);
        })
        router.refresh()
        router.push("/")
    }

    return (
        <div className="flex flex-col">
            <div>
                <CldUploadWidget
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                    onSuccess={(result, { widget }) => {
                        setResource(result?.info?.url);
                        widget.close();
                    }}
                >
                    {({ open }) => {
                        function handleOnClick() {
                            setResource(undefined);
                            open();
                        }
                        return (
                            <button onClick={handleOnClick}>
                                <div className="w-[90vw] flex justify-center m-auto mb-4">
                                    <Image
                                        width={300}
                                        height={200}
                                        alt={props.data.name}
                                        src={resource}
                                    />
                                </div>
                            </button>
                        );
                    }}
                </CldUploadWidget>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-[95vw] sm:w-[70vw] m-auto">
                <input type="text" name="img" value={resource} onChange={e => setResource(e.target.value)} className="visibility: hidden" />
                <Input type="text" label="Name of the user" defaultValue={props.data.name} name="name" className="mb-4" />
                <Input type="email" label="Email" defaultValue={props.data.email} name="email" className="mb-4" />
                <Input type="password" label="Password" defaultValue={props.data.password} name="password" className="mb-4" />
                <div className="flex gap-3 justify-center">
                    <Button color="primary" type="submit" className="sm:w-[100px]">
                        Send
                    </Button>
                    <Link href="/painel/profile">
                        <Button color="warning" className="sm:w-[100px] flex justify-center m-auto">
                            Return
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default edit