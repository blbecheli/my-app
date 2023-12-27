'use server'
import Image from "next/image"
import Link from "next/link"
import getUserData from "@/app/hook/logged"
import myCookie from "@/app/hook/cookie"
import login from "@/app/hook/login"

const Navbar = async () => {


  const idUser = await getUserData()
  console.log(idUser);

  const idCookie = await myCookie()
  const loginUser = await login()
  console.log("Este é o login" + loginUser?.image);

  return (


    <div className="flex flex-col content-betwen mt-2 mx-[2rem]">
      <p>Este é o id: {idUser?.id}</p>
      {idCookie == null ? (<p>Cookie não existe</p>) : (<p>{idCookie}</p>)}
      <p>O id é {loginUser?.id}</p>

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
          {idUser?.id != null ? (
            <>
              <Link href="/add">
                <div className="flex gap-2">
                  <Image src="/images/add.svg" alt="Add" width={16} height={16} />
                  <span>Add</span>
                </div>
              </Link>
              <Link href="/painel">
                <div className="flex gap-2">
                  {loginUser?.image == "" ? (
                    <Image src="/images/profile.svg" alt="Profile" width={16} height={16} />
                  ) : (
                    <img src={loginUser.image} alt="User profile"  className="w-[16px] h-[16px]"/>
                  )}
                  <span>{loginUser.name}</span>
                </div>
              </Link>
              <Link href="/logout">
                <div className="flex gap-2">
                  <Image src="/images/logoff.svg" alt="Logout" width={16} height={16} />
                  <span>Logoff</span>
                </div>
              </Link>
            </>) : (
            <>
              <Link href="/register">
                <div className="flex gap-2">
                  <Image src="/images/profile.svg" alt="Register or Login" width={16} height={16} />
                  <span>Register / Login</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
