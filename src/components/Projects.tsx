import Image from 'next/image'
import ShopGames from '../assets/ShopGames.png'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export function Projects() {
  return (
    <section className="mx-auto max-w-[1216px] pb-36 pt-20">
      <div className="space-y-4 text-center">
        <span className="tracking-[3px] text-gray-400">PROJETOS</span>
        <h2 className="text-center text-5xl">Projetos em destaque</h2>
      </div>
      <div className="flex justify-between pt-20">
        <div className="flex flex-col gap-14">
          <div className="space-y-4">
            <h3 className="text-3xl">ShopGames</h3>
            <p className="text-gray-400">
              Front-end desenvolvido utilizando Next.js para a @levexbr.
            </p>
          </div>
          <div className="space-x-4">
            <button className="border border-blue-500 p-6">
              <ArrowLeft size={24} />
            </button>
            <button className="border border-blue-500 p-6">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="w-[600px]">
          <Image src={ShopGames} alt="" />
        </div>
      </div>
    </section>
  )
}
