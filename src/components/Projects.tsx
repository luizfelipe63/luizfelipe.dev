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
      <div className='pt-20 grid grid-cols-2 gap-8'>
        <div className='flex flex-col gap-6'>
          <div className='bg-violet-600 w-full h-96 rounded'>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Pod Saúde digital</h1>
            <span className='text-xl py-1 px-4 bg-gray-950 rounded-md'>LANDING PAGE</span>
          </div>   
        </div>
        <div className='flex flex-col gap-6'>
          <div className='bg-orange-100  w-full h-96 rounded'>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Barreto Construção</h1>
            <span className='text-xl py-1 px-4 rounded-md bg-gray-950'>LANDING PAGE</span>
          </div>   
        </div>
        <div className='flex flex-col gap-6'>
          <div className='bg-green-200  w-full h-96 rounded'>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Barreto Construção</h1>
            <span className='text-xl py-1 px-4 rounded-md bg-gray-950'>LANDING PAGE</span>
          </div>   
        </div>
        <div className='flex flex-col gap-6'>
          <div className='bg-blue-400  w-full h-96 rounded'>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Barreto Construção</h1>
            <span className='text-xl py-1 px-4 rounded-md bg-gray-950'>LANDING PAGE</span>
          </div>   
        </div>
      </div>
    </section>
  )
}
