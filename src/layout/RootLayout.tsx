import  Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SplashCursor from "../components/SplashCursor";

const RootLayout = () => {
  const [date,setDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.addEventListener("keydown",() => {
      if(isLoading)
        setIsLoading(false);
    })
    setDate(new Date());
    setInterval(() => {
      setDate(new Date());
    },6000)
  },[]) 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },6750)
  },[])
  return (
    isLoading ?
    <div className="flex min-h-screen justify-center items-center" onClick={() => {setIsLoading(prev => !prev)}}>
      <DotLottieReact
        src="https://lottie.host/644d45db-d6f9-4d3a-bc67-4bd35117132f/njF5KyG19W.lottie"
        autoplay
        className=":w-[1024px] md:w-[2048px] z-50"
      />
      <SplashCursor/>
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