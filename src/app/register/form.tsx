'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation'


const Form = ({onSubmit}) => {
  const router = useRouter()
  const [resource, setResource] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    try {
      const userid = await onSubmit(formData)         
      document.cookie = `userid=${userid}` 
      console.log(userid);
      router.refresh()
      router.push("/")      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="flex flex-col w-[50vw] mx-auto my-4 border-gray-200 border-2 rounded-xl px-[1rem] py-[1rem] text-center">
      <Image src = "/images/logo.png" alt = "Logo" width = {64} height = {64} className="m-auto" />
      <h3 className="mt-5">Ignite your creativity and share unique moments! Join our new image-centric social network and turn your photos into amazing visual stories. Be part of a community that celebrates beauty and diversity in every picture. Sign up now and start painting the world with your memories!</h3>
      <div className="flex mt-[3rem] m-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="flex flex-col mb-[1rem]"> Create your user
          <input type="text" name="user" required placeholder="Choose a user" className="border-zinc-500 border-2 rounded-md mt-1"/>
        </label>
        <label className="flex flex-col mb-[1rem]"> Email
          <input type="text" name="email" required placeholder="example@gmail.com" className="border-zinc-500 border-2 rounded-md mt-1"/>
        </label>
        <label className="flex flex-col mb-[1rem]"> Choose a password
          <input type="password" name="password" required placeholder="Password" className="border-zinc-500 border-2 rounded-md mt-1" />
        </label>
        <label className="flex flex-col mb-[1rem]"> Repeat the password
          <input type="password" name="password2" required placeholder="Repeat password" className="border-zinc-500 border-2 rounded-md mt-1"/>
        </label>
        <input type="text" name="image" className="visibility: hidden" value={resource}/>
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
                                    Upload an Image
                                </button>
                            );
                        }}
                    </CldUploadWidget> 
        <input type="submit" value="Submit" className="rounded-lg bg-blue-700 p-auto text-white"/>             
        <p>Have an account? <Link href="/login">Log in</Link> </p>
      </form>      
      </div>
    </div>
  )
}
export default Form