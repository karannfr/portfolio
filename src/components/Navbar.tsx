import { useEffect } from 'react'
import { useState, useRef } from 'react'
import { useAnimationFrame } from 'motion/react';
import Aurora from './Aurora';
const weekDays: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday"
};

type NavbarProps = {
  date: Date | null
}

const Navbar = ({date} :NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useAnimationFrame((t) => {
    if (!ref.current) return
    const visible = Math.floor(t / 500 ) % 2 === 0;
    ref.current.style.opacity = visible ? '1' : '0';
  })
  const [weekday, setWeekday] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [ddmmyy, setDDMMYY] = useState<string | null>(null);
  const [timezone, setTimeZone] = useState<string | null>(null);
  useEffect(() => {
    if(date == null) return
    const parsedDate = date;

    if (isNaN(parsedDate.getTime())) {
      console.error("Invalid date passed as prop");
      return;
    }

    const shortDay = parsedDate.toDateString().substring(0, 3);
    setWeekday(weekDays[shortDay]);

    let hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    setTime(`${hours}:${minutes} ${ampm}`);

    const mm = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const dd = parsedDate.getDate().toString().padStart(2, '0');
    const yy = parsedDate.getFullYear().toString().slice(-2);
    setDDMMYY(`${mm}/${dd}/${yy}`);

    const offsetMinutes = parsedDate.getTimezoneOffset();
    const sign = offsetMinutes > 0 ? '-' : '+';
    const absOffset = Math.abs(offsetMinutes);
    const offsetHours = Math.floor(absOffset / 60).toString().padStart(2, '0');
    const offsetMins = (absOffset % 60).toString().padStart(2, '0');
    setTimeZone(`GMT${sign}${offsetHours}:${offsetMins}`);
  }, [date]);
  return (
    <>
    <nav className='flex justify-between items-center py-6 px-8 sm:px-16 w-full border-b border-b-white/5 bg-transparent'>
      <div className='bg-purple-400 rounded-[100px] p-1'><img src="./memoji.png" alt="memoji"  className='h-[56px] w-[56px]'/></div>
      <div className='flex flex-row items-center gap-2.5 font-bold'>
        <div ref={ref}
          className={`bg-purple-400 rounded-[20px] h-[8px] w-[8px] mr-1.5 sm:block hidden transition-opacity duration-10 ease-in-out`}>
        </div>
        <div>
          <div>{weekday}</div>
          <div>{ddmmyy}</div>
        </div>
        <div>
          <div>{time}</div>
          <div>{timezone}</div>
        </div>
      </div>
    </nav>
    <Aurora
      colorStops={["#3A29FF", "#66ffee", "#3A29FF"]}
      blend={0.5}
      amplitude={0.9}
      speed={0.5}
    />
    </>
  )
}

export default Navbar