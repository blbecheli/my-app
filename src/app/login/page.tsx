import Image from "next/image"

const page = () => {
  return (
    <div className="flex flex-col w-[50vw] mx-auto my-4 border-gray-200 border-2 rounded-xl px-[1rem] py-[1rem] text-center">
      <Image src = "/images/logo.png" alt = "Logo" width = {64} height = {64} className="m-auto" />
      <h3 className="mt-5">Welcome back! Your journey continues, and we're excited to have you back in the picture. Dive into your world of memories, connect with friends, and share the moments that matter. Let's pick up where we left off – log in and rediscover the magic!</h3>
      <div className="flex mt-[3rem] m-auto">
      <form className="flex flex-col">
        <label className="flex flex-col mb-[1rem]"> Create your user
          <input type="text" name="user" required placeholder="Choose a user" className="border-zinc-500 border-2 rounded-md mt-1"/>
        </label>
        <label className="flex flex-col mb-[1rem]"> Choose a password
          <input type="password" name="password" required placeholder="Password" className="border-zinc-500 border-2 rounded-md mt-1" />
        </label>        
        <input type="submit" value="Login" className="rounded-lg bg-blue-700 p-auto text-white" />        
      </form>      
      </div>
    </div>
  )
}
export default page