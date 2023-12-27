'use client'
import Link from "next/link"


const Form = ({ onSubmit }) => {  
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    onSubmit(formData).catch((error: any) => {
      console.log(error);
    })
  }

  return (
    
      <div className="flex mt-[3rem] m-auto">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input type="submit" value='Yes' />
        </form>
        <Link href='/'>
        <button>Return</button>
        </Link>
      </div>
    
  )
}
export default Form




