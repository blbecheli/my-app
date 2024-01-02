import login from "@/hook/login"
import searchP from "@/hook/search"
import { redirect } from "next/navigation"
import React from "react";
import NavbarFront from "./NavbarFront"

const NavbarP = async () => {  

  const loginUser = await login() 

  const handleSearch = async (formData: FormData) => {
    'use server'
    const searchInput = formData.get('searchInput')?.valueOf()
    if (typeof searchInput !== 'string' || searchInput.length === 0) {
      throw new Error('Search is not a string or is empty')
    }
    const search = await searchP(searchInput)
    redirect(`/search/${search}`)
  }

  return (
    <>
    <NavbarFront  loginUser = {loginUser} handleSearch = {handleSearch}/>    
    </>
  )
}

export default NavbarP