import Image from 'next/image'
import AboutMe from '../assets/me-foto-principal.jpg'
import { ArrowRight, Download } from 'phosphor-react'

export function About() {
  return (
    <section id='about' className="mx-auto max-w-[1120px] pb-36 pt-20">
      <div className="text-center flex-col flex gap-3">
        <h2 className="text-center text-5xl sm:text-3xl">
          SOBRE MIM
        </h2>
        <span className="text-gray-400">Conheça minha história...</span>
      </div>
      <div className="flex justify-around gap-8 pt-20 sm:flex-col">
        <div className="w-[500px] sm:w-full">
          <Image src={AboutMe} alt="" className="rounded-lg h-full" />
        </div>
        <div className="max-w-lg space-y-4 text-gray-400">
          <p>Meu nome é Luiz Felipe e sou de Brasília – DF (Brasil).</p>
          <p>
            Minha jornada no design começou em 2015, quando iniciei a faculdade
            de Jogos Digitais, que foi onde obtive muitos conhecimentos nas mais
            diversas áreas de criação.
          </p>{' '}
          <p>
            Milan e sou de Chapecó – SC (Brasil). Minha jornada no design
            começou em 2015, quando iniciei a faculdade de Jogos Digitais, que
            foi onde obtive muitos conhecimentos nas mais diversas áreas de
            criação…
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-4 text-white transition hover:bg-white hover:text-black">
          Download CV
        </button>
        </div>
      </div>
    </section>
  )
}
