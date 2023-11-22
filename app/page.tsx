'use client'
import Image from 'next/image'
import { Coming_Soon } from 'next/font/google'

const coming_soon = Coming_Soon({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    // center the content main
    <main className="flex flex-col justify-left w-[80%] bg-orange-200 opacity-90 mx-10 my-10 p-6">
      <h1 className={`${coming_soon.className} text-4xl`}>Study Time</h1>
      <p className="text-zinc-600">A simple app to organize your studies.</p>

    </main>
  )
}
