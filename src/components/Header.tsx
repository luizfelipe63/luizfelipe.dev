import Image from 'next/image'
import ProfileLogo from '../assets/mePraia.jpg'
import { ArrowRight } from 'phosphor-react'

export function Header() {
  return (
    <header className="flex flex-col items-center bg-black px-24 pb-36 text-white sm:px-6 sm:pb-20">
      <div className="absolute left-0 top-24 w-[220px] bg-gradient-hero opacity-80 blur-3xl">
        a
      </div>
      <div className="absolute bottom-0 right-0 w-[220px] bg-gradient-hero opacity-80 blur-3xl">
        a
      </div>
      <nav className="flex w-full max-w-[1216px] items-center justify-between py-8 ">
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
          <ul className="flex gap-6 sm:text-sm">
            <li>
              <a href="#" className="transition hover:text-gray-400">
                Projetos
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-gray-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-gray-400">
                Serviços
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="pt-20 sm:pt-10">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-6">
          <h1 className="w-max rounded-lg bg-gradient-hero px-6 py-3 text-6xl sm:text-3xl">
            Prazer, Luiz Felipe
          </h1>
          <h2 className="text-5xl sm:text-xl">Sou Desenvolvedor Full-Stack</h2>
          <p className="max-w-3xl text-gray-500 sm:text-sm">
            Sou um profissional altamente qualificado. Com habilidades em React,
            Typescript, JavaScript, NextJS e Node. Assim trasnformo conceitos em
            realidade.{' '}
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-gray-50 px-6 py-4 text-black transition hover:bg-gray-300">
            SOLICITE SUA PROPOSTA
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </header>
  )
}
