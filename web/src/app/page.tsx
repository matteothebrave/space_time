import { User } from 'lucide-react'

export default function Home() {
  return <main className="grid grid-cols-2 min-h-screen">
    {/* Left */}
    <div className=" relative flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10
    flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
      {/* Blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      {/* Stripes */}
      <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />

      {/* Sign-In */}
      <a href="" className="flex items-center gap-3 text-left transition-colors hover:text-gray-50 ">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <User className="h5 w5 text-gray-500" />
        </div>

        <p className='text-sm leading-snug max-w-[140px]'>
          <span>Crie sua conta e salve suas memórias!</span></p>
      </a>
    </div>
    {/* Right */}
    <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px] ">
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a href="" className="underline hover:text-gray-50">criar agora!</a>!
        </p>
      </div>
    </div>
  </main >


}

