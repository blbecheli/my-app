'use client'
import { useState } from "react"
import { CldUploadWidget } from 'next-cloudinary';
import { Input, Textarea, Button } from "@nextui-org/react";
import { CameraIcon } from "@/components/camera";
import Link from "next/link";

const post = ({ onSubmit }) => {
    const [resource, setResource] = useState();
    // console.log(resource);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        onSubmit(formData).catch((error: any) => {
            console.log(error);
        })
    }
    return (
        <div className="w-[80vw] flex flex-col m-auto">
            <h3 className="text-center">Ready to amplify your story? ...</h3>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col w-[70%] m-auto">
                    <label className="flex flex-col">
                        <Input type="text" label="Title" name="title" />
                    </label>
                    <label className="flex flex-col">
                        <Textarea
                            label="Tell us a little about your picture"
                            placeholder=""
                            className="w-[100%] mt-[3rem]"
                            name="content"
                        />
                    </label>
                    <label className="flex flex-col">
                        <input type="text" name="image" className="border-zinc-500 border-2 rounded-md mt-1 visibility: hidden" value={resource} />
                    </label>
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
                                <Button color="primary" endContent={<CameraIcon />} onClick={handleOnClick} className="mt-4">
                                    Upload an Image
                                </Button>
                            );
                        }}
                    </CldUploadWidget>
                    <div className="max-h-[40vh] mt-2">
                        <img src={resource} alt="" />
                    </div>
                    <div className="flex m-auto gap-4 mt-[2rem]">
                        <Button color="primary" className="sm:w-[100px] m-auto" type="submit">
                            Submit
                        </Button>
                        <Link href="/">
                            <Button color="warning" className="sm:w-[100px] m-auto">
                                Cancel
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default post