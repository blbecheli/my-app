'use server'

import myCookie from "./cookie";
import prisma from "@/db";
import { cookies } from "next/headers";

const cookie = async () => {
  const idCookie =  await cookies()?.get("userid")?.value;  
  return idCookie;
}

const login = async () => {
  const cookieV = await cookie();
  let prismadb;

if (cookieV === undefined) {
    return false;
  }

const cookiedata = await prisma.user.findUnique({
    where: {
      id: cookieV
    },
    select: {
      logged: true,
      id: true,
      image: true,
      name: true,
    },  
})

 return cookiedata


};

export default login;
