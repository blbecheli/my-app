'use client'
import { useState } from "react"
import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';




const post = ({ onSubmit }) => {
const [resource, setResource] = useState(undefined);
console.log(resource);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        onSubmit(formData).catch((error: any) => {
            console.log(error);
        })
    }   
    return (
        <div className="w-[100vw] flex flex-col">
            <h3 className="text-center">Ready to amplify your story? ...</h3>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col w-[70%] m-auto">
                    <label className="flex flex-col">
                        Title
                        <input name="title" type="text" className="border-zinc-500 border-2 rounded-md mt-1" />
                    </label>
                    <label className="flex flex-col">
                        Tell us a little about your picture
                        <textarea name="content" cols={30} rows={10} className="border-zinc-500 border-2 rounded-md mt-1"></textarea>
                    </label>
                    <label className="flex flex-col">
                        Link to your picture
                        <input type="text" name="link" className="border-zinc-500 border-2 rounded-md mt-1" />
                    </label>
                    <input type="submit" value="Publish" />
                    <CldUploadWidget
                        uploadPreset="<Your Upload Preset>"
                        onSuccess={(result, { widget }) => {
                            setResource(result?.info);
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
                                    Upload an Image
                                </button>
                            );
                        }}
                    </CldUploadWidget>
                </form>
            </div>
        </div>
    )
}
export default post