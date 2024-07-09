import Image from 'next/image'
import pod from '../assets/mockup-podsaude.jpg'
import barreto from '../assets/mockup-barretoConstrucao.jpg'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1120px] pb-36 pt-20">
      <div className="text-center flex-col flex gap-3">
        <h2 className="text-center text-5xl">
          PORTFOLIO
        </h2>
        <span className="text-gray-400">Projetos em destaque</span>
      </div>
      <div className='pt-20 flex flex-col gap-y-12'>
        <div className="flex justify-evenly gap-10">
          <Image src={pod} alt='' width={450} className='rounded'>
          </Image>
          <div className='flex flex-col justify-center gap-8'>
            <span className='bg-gradient-hero py-1 px-4 rounded max-w-max'>LANDING PAGE</span>
            <h1 className='text-4xl'>Pod Saúde Digital</h1>
            <a href="">Acesse aqui</a>
          </div>
        </div>
        <div className="flex justify-evenly gap-10">
          <div className='flex flex-col justify-center gap-8'>
            <span className='bg-gradient-hero py-1 px-4 rounded max-w-max'>LANDING PAGE</span>
            <h1 className='text-4xl'>Barreto construção</h1>
            <a href="">Acesse aqui</a>
          </div>
          <Image src={barreto} alt='' width={450} className='rounded'>
          </Image>
        </div>    
      </div>
    </section>
  )
}
