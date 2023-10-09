import Image from 'next/image'
import ShopGames from '../assets/ShopGames.png'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export function Projects() {
  return (
    <section className="mx-auto max-w-[1216px] pb-36 pt-20 sm:px-6 sm:py-20">
      <div className="space-y-4 text-center">
        <span className="text-sm tracking-[3px] text-gray-400">PROJETOS</span>
        <h2 className="text-center text-5xl sm:text-3xl">
          Projetos em destaque
        </h2>
      </div>
      <div className="flex justify-between gap-8 pt-20 sm:flex-col-reverse">
        <div className="flex flex-col gap-14">
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-xl">ShopGames</h3>
            <p className="text-gray-400">
              Front-end desenvolvido utilizando Next.js para a @levexbr.
            </p>
          </div>
          <div className="space-x-4">
            <button className="border border-blue-500 p-6 transition hover:bg-blue-500">
              <ArrowLeft size={24} />
            </button>
            <button className="border border-blue-500 p-6 transition hover:bg-blue-500">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="w-[600px] sm:w-full">
          <Image src={ShopGames} alt="" />
        </div>
      </div>
    </section>
  )
}
