'use client'

import { useState } from "react"
import Link from "next/link"
import getTodayDate from "../GetTodayDate"

export default function InputButton({ pathname }: { pathname: string }) {
  const d = getTodayDate()
  const [date, setDate] = useState(d)

  return (
    <div className="flex flex-wrap items-center gap-4">
      <input type="date" onChange={(e) => { setDate(e.target.value) }}
        className="bg-transparent dark:[color-scheme:dark] cursor-pointer" value={date} />
      <Link href={{ pathname: pathname, query: { date: date } }}
        className="p-2 rounded-full bg-[#304045] hover:bg-[#0f3] hover:text-black duration-300">
        Go</Link>
    </div>
  )
}