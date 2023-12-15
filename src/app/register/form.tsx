'use client'

import Image from "next/image"
import Link from "next/link"


const Form = ({onSubmit}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    onSubmit(formData).catch((error) => {
      console.error(error)
    })
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
        <input type="submit" value="Submit" className="rounded-lg bg-blue-700 p-auto text-white"/>       
        <p>Have an account? <Link href="/login">Log in</Link> </p>
      </form>      
      </div>
    </div>
  )
}
export default Form