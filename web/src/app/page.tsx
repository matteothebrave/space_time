import Copyright from '@/components/Copyright'
import Signin from '@/components/Signin'
import Hero from '@/components/Hero'
import Right from '@/components/Right'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className=" relative flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10
    flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16" >
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />
        {/* Sign-In */}
        <Signin />
        {/* Hero */}
        <Hero />
        {/* CopyRight */}
        <Copyright />
      </div>
      {/* Right */}
      <Right />
    </main >
  )

}

