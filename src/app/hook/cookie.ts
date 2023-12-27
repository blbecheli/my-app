import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache'

const myCookie = async() => {
  const idCookie =  await cookies()?.get("userid")?.value;
  revalidatePath('/', 'layout')
  return idCookie;
}

export default myCookie;

