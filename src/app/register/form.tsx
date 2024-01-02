'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation'
import { Button } from "@nextui-org/react";
import { CameraIcon } from "@/components/camera";
import { Input } from "@nextui-org/react";


const Form = ({ onSubmit }) => {
  const router = useRouter()
  const [resource, setResource] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    try {
      const userid = await onSubmit(formData)
      document.cookie = `userid=${userid}`
      // console.log(userid);
      router.refresh()
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col sm:w-[50vw] mx-auto my-4 border-gray-200 border-2 rounded-xl px-[1rem] py-[1rem] text-center">
      <Image src="/images/logo.png" alt="Logo" width={64} height={64} className="m-auto" />
      <h3 className="mt-5">Ignite your creativity and share unique moments! Join our new image-centric social network and turn your photos into amazing visual stories. Be part of a community that celebrates beauty and diversity in every picture. Sign up now and start painting the world with your memories!</h3>
      <div className="flex mt-[3rem] m-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input type="text" label="Create your user" placeholder="Enter your email" name="user" className="mb-4" />
          <Input type="email" label="Email" placeholder="Enter your email" name="email" className="mb-4" />
          <Input type="password" label="Choose a password" placeholder="Enter your email" name="password" className="mb-4" />
          <Input type="password" label="Repeat the password" placeholder="Enter your email" name="password2" className="mb-4" />
          <input type="text" name="image" className="visibility: hidden" value={resource} />
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
                <Button color="success" endContent={<CameraIcon />} onClick={handleOnClick}>
                  Take a photo
                </Button>
              );
            }}
          </CldUploadWidget>
          <Button color="primary" type="submit" className="mt-4">
            Register
          </Button>
          <p>Have an account? <Link href="/login">Log in</Link> </p>
        </form>
      </div>
    </div>
  )
}
export default Form