import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Hero() {
    return(
        <div className='space-y-5'>
          <Image src={nlwLogo} alt="nlw space time" />
          <div className='max-w-[420px] space-y-1'>
            <h1 className='text-5xl font-bold leading-tight text-gray-50'>Our time Capsule</h1>
            <p className='text-lg leading-relaxed'>A collection of our best moments and highlights</p>
          </div>

          <a className="inline-block rounded-full bg-green-500 px-5 py-3 text-sm font-alt uppercase leading-none text-black hover:bg-green-600" href="">Register a memory</a>
        </div>
    )
}