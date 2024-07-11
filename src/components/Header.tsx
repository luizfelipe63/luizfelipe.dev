import ProfileLogo from '../assets/mePraia.jpg'
import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="flex flex-col items-center bg-bg-gradient pb-12 text-white sm:px-6 sm:pb-20">
      <nav className="flex w-full items-center justify-between pt-6 m-auto max-w-[1120px]">
        <div className="flex items-center gap-4">
          <Image
            src={ProfileLogo}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <h3 className="text-xl sm:hidden">Luiz Felipe</h3>
        </div>
        <div>
          <ul className="flex gap-11 sm:text-sm items-center">
            <li>
              <a href="#about" className="transition hover:text-gray-400">
                Quem sou eu 
              </a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-gray-400">
                Portfólio
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-gray-400">
                Serviços
              </a>
            </li>
            <li>
              <button className="flex items-center gap-2 rounded-lg px-6 py-4 text-white border border-blue-400 transition hover:bg-blue-400 hover:border-1 hover:border-transparent">Solicitar orçamento <ArrowRight size={24} /></button>
            </li>
          </ul>
        </div>
      </nav>
      <section className="pt-20 flex m-auto max-w-[1120px]">
        <div className="flex flex-col gap-11 items-center">
          <h1 className="w-max rounded-lg bg-gradient-hero px-6 py-3 text-6xl sm:text-3xl">
            Prazer, Luiz Felipe
          </h1>
          <h2 className="text-5xl sm:text-xl">Sou Desenvolvedor Full-Stack</h2>
          <p className="max-w-3xl text-gray-500 text-center">
            Sou um profissional altamente qualificado. Com habilidades em React,
            Typescript, JavaScript, NextJS e Node. Assim trasnformo conceitos em
            realidade.{' '}
          </p>
         <div className='w-full border flex justify-between border-blue-400 py-8 px-12 rounded'>
          <div className='flex flex-col justify-center text-center gap-2'>
            <h1 className='text-2xl'>70%</h1>
            <span className='text-gray-500'>Job actviments</span>
          </div>
          <div className='flex flex-col justify-center text-center gap-2'>
            <h1 className='text-2xl'>1.6K</h1>
            <span className='text-gray-500'>Job actviments</span>
          </div>
          <div className='flex flex-col justify-center text-center gap-2'>
            <h1 className='text-2xl'>$10.4M</h1>
            <span className='text-gray-500'>Job actviments</span>
          </div>
          <div className='flex flex-col justify-center text-center gap-2'>
            <h1 className='text-2xl'>+24</h1>
            <span className='text-gray-500'>Job actviments</span>
          </div>
         </div>
        </div>
      </section>
    </header>
  )
}
