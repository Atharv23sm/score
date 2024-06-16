'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type linktype = {
  href: string,
  name: string,
  src: string,
}

const Leagues = [
  { id: 1, name: "Premier League", href: "premier-league", src: "/LeagueLogos/pl.jpg" },
  { id: 2, name: "Primera Division", href: "la-liga", src: "/LeagueLogos/laliga.webp" },
  { id: 3, name: "Bundesliga", href: "bundesliga", src: "/LeagueLogos/bundesliga.png" },
  { id: 4, name: "Serie A", href: "serie-a", src: "/LeagueLogos/seriea.jpg" },
  { id: 5, name: "Ligue 1", href: "ligue-1", src: "/LeagueLogos/league1.png" },
  { id: 6, name: "Primeira Liga", href: "primeira-liga", src: "/LeagueLogos/ligaportugal.jpg" },
  { id: 7, name: "Campeonato Brasileiro Série A", href: "brazilian-series-a", src: "/LeagueLogos/brazil.png" },
  { id: 8, name: "Copa Libertadores", href: "copa-libertadores", src: "/LeagueLogos/copal.png" },
]

const SidebarLinks = ({ href, name, src }: linktype) => {
  return (
    <Link href={href} className=' w-full flex flex-wrap items-center p-2 gap-2 rounded-md hover:bg-[#0f9] hover:text-black duration-300'>
      <img src={src} alt={name} className='bg-white w-8 h-8' />
      <p>{name}</p>
    </Link>
  )
}

const Sidebar = () => {

  const [isSideBar, setIsSideBar] = useState(false)

  useEffect(() => {
    window.innerWidth > 768 ? setIsSideBar(true) : setIsSideBar(false)
    addEventListener('resize', () => {
      window.innerWidth > 768 ? setIsSideBar(true) : setIsSideBar(false)
    })
  }, [])

  return isSideBar ?
    <div className='w-full md:w-[20%] h-[90vh] p-4 bg-[#101619] flex justify-between md:overflow-y-scroll text-[15px]'>
      <section className='w-max flex flex-col gap-4'>
        <h1 className='font-bold text-xl text-[#def]'>Leagues</h1>
        <div className='flex flex-col gap-4'>
          {
            Leagues.map((league) => (
              <div key={league?.id} className='flex flex-wrap gap-2'>
                <SidebarLinks href={league.href} name={league?.name} src={league?.src} />
              </div>
            ))
          }
        </div>
      </section>
      <div className='md:hidden cursor-pointer text-xl'
        onClick={() => {
          setIsSideBar(false)
        }}>X</div>
    </div>
    :
    <div className='w-20 h-10 m-4 hover:text-black duration-500 group relative flex justify-center items-center
    overflow-hidden rounded-full border-[1px] md:hidden '
      onClick={() => {
        setIsSideBar(true)
      }}>
      <div className='absolute z-10'>Leagues</div>
      <div className=' absolute w-24 h-20 translate-y-full group-hover:translate-y-0 duration-700 bg-[#0f9] blur z-0 rounded-full' />
    </div>

}

export default Sidebar