import  Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const RootLayout = () => {
  const [date,setDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setDate(new Date());
    setInterval(() => {
      setDate(new Date());
    },60000)
  },[]) 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },8000)
  },[])
  return (
    isLoading ?
    <div className="flex min-h-screen justify-center items-center">
      <DotLottieReact
        src="https://lottie.host/644d45db-d6f9-4d3a-bc67-4bd35117132f/njF5KyG19W.lottie"
        autoplay
        className="sm:w-[1024px] md:w-[2048px]"
      />
    </div>
    :
    <>
      <Navbar date={date}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout