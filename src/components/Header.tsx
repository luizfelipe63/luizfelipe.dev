import ProfileLogo from '../assets/mePraia.jpg'
import { ArrowRight } from 'phosphor-react'
import Link from 'next/link'
import Image from 'next/image'
import ilustacao from '../assets/illustration3.png'

export function Header() {
  return (
    <header className="flex flex-col items-center bg-bg-gradient px-9 pb-12 text-white sm:px-6 sm:pb-20">
      <nav className="flex w-full items-center justify-between pt-6 ">
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
      <section className="pt-12 sm:pt-10 flex items-center">
        <div className="flex flex-col gap-8 sm:gap-6 w-full">
          <h1 className="w-max rounded-lg bg-gradient-hero px-6 py-3 text-6xl sm:text-3xl">
            Prazer, Luiz Felipe
          </h1>
          <h2 className="text-5xl sm:text-xl leading-tight">Tenha seu negocio com uma presença online</h2>
          <p className="text-gray-500 sm:text-sm">
            Sou um profissional altamente qualificado. Com habilidades em React,
            Typescript, JavaScript, NextJS e Node. Assim trasnformo conceitos em
            realidade.{' '}
          </p>
          <Link href="/solicitar-proposta">
            <button className="flex items-center gap-2 rounded-lg bg-gray-50 px-6 py-4 text-black transition hover:bg-blue-400 hover:text-white">
              SOLICITE SUA PROPOSTA
              <ArrowRight size={24} />
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-8 text-center sm:gap-6">
          <Image 
          src={ilustacao} 
          alt=''
          className='w-full'
          >
          </Image>
        </div>
      </section>
    </header>
  )
}
