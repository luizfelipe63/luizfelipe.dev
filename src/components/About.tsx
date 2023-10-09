import Image from 'next/image'
import AboutMe from '../assets/me-foto-principal.jpg'

export function About() {
  return (
    <section className="mx-auto max-w-[1216px] pb-36 pt-20 sm:px-6 sm:py-20">
      <div className="space-y-4 text-center">
        <span className="tracking-[3px] text-gray-400">SOBRE MIM</span>
        <h2 className="text-center text-5xl sm:text-3xl">
          Conheça minha história...
        </h2>
      </div>
      <div className="flex justify-around gap-8 pt-20 sm:flex-col">
        <div className="w-[500px] sm:w-full">
          <Image src={AboutMe} alt="" className="rounded-lg" />
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
        </div>
      </div>
    </section>
  )
}
