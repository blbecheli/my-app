// 'use client'

import Image from "next/image"
import Link from "next/link"
import { getUserData } from "@/app/hook/logged"
import useUserStore from "../../userStore"



const Navbar = () => {

  // const { userData, fetchUserData }: any = useUserStore();

  const userFetch = async () => {
    // const userObj = { id: 0, name: ""}
    const user = await getUserData().then((res) => {
      const userObj = { id: res.id, name: res.name}
      return userObj     
    })
    return [user.id, user.name]   
  }

  const {userId, userName} = userFetch();
  console.log(userId, userName);
  
  

  // fetchUserData();

  return (
    <div className="flex flex-col content-betwen mt-2 mx-[2rem]">
      <p>O id é {userId}</p>
      <div className="flex content-betwen" >
        <div className="w-1/4">
          <Image src="/images/logo.png" alt="Logo" width={64} height={64} />
        </div>
        <div className="flex justify-between w-3/4 mx-[10rem]">
          <Link href="/">
            <div className="flex gap-2">
              <Image src="/images/home.svg" alt="Home" width={16} height={16} />
              <span>Home</span>
            </div>
          </Link>
          <div className="flex gap-2">
            <Image src="/images/search.svg" alt="Search" width={16} height={16} />
            <span>Search</span>
          </div>
          <Link href="/add">
            <div className="flex gap-2">
              <Image src="/images/add.svg" alt="Add" width={16} height={16} />
              <span>Add</span>
            </div>
          </Link>
          <Link href="/register">
            <div className="flex gap-2">
              <Image src="/images/profile.svg" alt="Profile" width={16} height={16} />
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
