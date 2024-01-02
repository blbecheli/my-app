'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import UserContext from "@/components/context/userContext"
import { useContext } from "react"
import { Input, Button } from "@nextui-org/react";


const Form = ({ onSubmit }) => {
  const { setIdUser, setIdCookie } = useContext(UserContext)
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    try {
      const userid = await onSubmit(formData)
      document.cookie = `userid=${userid}`
      setIdUser(userid)
      setIdCookie(userid)
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
      <h3 className="mt-5">Welcome back! Your journey continues, and we're excited to have you back in the picture. Dive into your world of memories, connect with friends, and share the moments that matter. Let's pick up where we left off – log in and rediscover the magic!</h3>
      <div className="flex mt-[3rem] m-auto">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Input type="email" label="Type or email" placeholder="Enter your email" name="user" className="mb-4" />
          <Input type="password" label="Type or password" placeholder="Enter your password" name="password" className="mb-4" />
          <Button color="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
export default Form