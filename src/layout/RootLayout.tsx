import  Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

const RootLayout = () => {
  const [date,setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(new Date());
    setInterval(() => {
      setDate(new Date());
    },60000)
  },[]) 
  return (
    <>
      <Navbar date={date}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout