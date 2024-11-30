import Encryption from '@/components/main/Encryption'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Sphere from '@/components/main/Sphere'
import Boxx from '@/components/sub/Box'
import { Shiba } from '@/components/sub/Shiba'
import StarsCanvas from '@/components/sub/StarBackground'
import Image from 'next/image'
// <Hero/>  <StarsCanvas/> className='h-full w-full'
/**
  <div className="flex flex-col h-[850px] gap-20">

      </div>
         <Boxx/>
 */
export default function Home() {
  return (
    <main className='h-full w-full' >
      <div className="flex flex-col gap-20">
      <Sphere/> 
      <Hero/> 
      <Skills/>
      <Encryption/>
      <Projects/>
</div>
    
     
          </main>
  )
}
