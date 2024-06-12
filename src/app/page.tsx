"use client"
import { useEffect, useState } from "react";
import Image from "next/image" ;

export default function Home() {

  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {

    // const target = new Date("06/21/2024 23:59:59")
    const target = new Date("06/12/2024 17:12:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(m);

      const s = Math.floor(
        (difference % (1000 * 60)) / (1000)
      );
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setPartyTime(true)
      }

    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (

    <div className="container w-screen h-screen flex justify-center items-center">

      {partyTime ? (
        <>
          <h1>Happy Birthday</h1>
          <video className="w-full h-full flex justify-center" autoPlay muted loop>
            <source src='/happy-birthday-pexel.mp4'/>
          </video>
        </>
      ) : (
        <>
          <div className="timer-wrapper">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label">Days</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Hours</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
          <Image
          alt="always-have-2-mags" 
          src='/end-of-watch-2mags.jpg'
          layout="fill"
          quality={100}
          />
        </>
      )}
    </div>

  );
}
