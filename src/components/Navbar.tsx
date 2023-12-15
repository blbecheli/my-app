import Image from "next/image"
import Link from "next/link"
import prisma from "@/db"
import getUserData from "@/app/hook/logged"


const Navbar = async () => {  
 

const idUser = await getUserData()
console.log(idUser);

  
  return (


    <div className="flex flex-col content-betwen mt-2 mx-[2rem]">         
      <p>Este é o id: {idUser?.id}</p>      

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
          {idUser?.id != null? (
            <>
              <Link href="/add">
                <div className="flex gap-2">
                  <Image src="/images/add.svg" alt="Add" width={16} height={16} />
                  <span>Add</span>
                </div>
              </Link>
              <Link href="/painel">
                <div className="flex gap-2">
                  <Image src="/images/profile.svg" alt="Profile" width={16} height={16} />
                  <span>{idUser?.name}</span>
                </div>
              </Link>
              <Link href="/logout">
                <div className="flex gap-2">
                  <Image src="/images/logoff.svg" alt="Logout" width={16} height={16} />
                  <span>Logoff</span>
                </div>
              </Link>
            </>) :(
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
