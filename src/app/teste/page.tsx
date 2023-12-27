import getUserData from "../hook/logged"
import IdUser from "./id"

const page = async() => {

    const logIn = await getUserData()

  

  return (
    <div>
       <IdUser value = {logIn.id}/>
    </div>
  )
}
export default page