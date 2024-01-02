'use client'
import Link from "next/link"
import { useState } from "react"
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation'
import { Image, Input, Button } from "@nextui-org/react";

const edit = (props) => {
    const router = useRouter()
    const [resource, setResource] = useState(props.post.image)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        props.handlePost(formData).catch((error: any) => {
            console.log(error);
        })
        router.refresh()
        router.push("/painel/posts")
    }

    return (
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
                        <div className="w-[50vw] m-auto flex justify-center ">
                        <button onClick={handleOnClick} >
                            <Image
                                width={300}
                                height={200}
                                alt="NextUI hero Image with delay"
                                src={resource} />
                        </button>
                        </div>
                    );
                }}
            </CldUploadWidget>
            <form onSubmit={handleSubmit} className="flex flex-col flex-wrap md:flex-nowrap gap-4 sm:w-[50vw] m-auto">
                <input type="text" value={props.post.id} name="id" readOnly className="visibility: hidden" />
                <input type="text" value={resource} onChange={e => setResource(e.target.value)} name="image" readOnly className="visibility: hidden" />
                <Input type="text" label="Title" name="title" defaultValue={props.post.title} />
                <Input type="text" label="Content" name="content" defaultValue={props.post.content} />                
                <div className="flex gap-3 justify-center">
                    <Button color="primary" type="submit">
                        Send
                    </Button>
                    <Link href={"/painel/posts"}>
                        <Button color="warning">
                            Return
                        </Button>
                    </Link>
                </div>
            </form>

        </div>
    )
}
export default edit