import getUserData from "../hook/logged"

const page = async() => {

    const logIn = await getUserData()
  return (
    <div>
        <p>{logIn?.name}</p>
    </div>
  )
}
export default page