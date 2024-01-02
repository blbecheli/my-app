'use client'
import Link from "next/link"
import { useContext } from "react"
import UserContext from "@/components/context/userContext"
import { Button } from "@nextui-org/react";


const Form = ({ onSubmit }) => {

  const { setIdUser, setIdCookie } = useContext(UserContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    onSubmit(formData).catch((error: any) => {
      setIdCookie(null)
      setIdUser(null)
      console.log(error);
    })
  }

  return (

    <div className="flex flex-col mt-[3rem] m-auto">
      <h1 className="text-center mb-4">Ready to disconnect from Picster and explore the offline world? Are you sure you want to log out now?</h1>
      <form className="flex gap-3 justify-center w-[70vw] m-auto" onSubmit={handleSubmit}>
        <Button color="primary" variant="flat" type="submit">
          Yes
        </Button>
        <Link href='/'>
        <Button color="primary" variant="shadow">
          Return
        </Button>
        </Link>        
      </form>      
      <div className="flex flex-wrap gap-4 items-center">

      </div>
    </div >

  )
}
export default Form




