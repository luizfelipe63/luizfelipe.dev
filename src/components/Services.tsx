import { Code, Database, Desktop, StackSimple } from 'phosphor-react'

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1120px] pb-36 pt-20">
      <div className="text-center flex-col flex gap-3">
        <h2 className="text-center text-5xl sm:text-3xl">SERVIÇOS</h2>
        <span className="text-gray-400">Meus serviços prestados</span>
      </div>
      <div className="flex pt-20 place-items-center gap-6">
        <div className="bg-neutral-950 px-6 py-8 rounded">
          <div className="flex flex-col gap-5 items-center">
            <Desktop size={36} />
            {/* <span className='border border-blue-500 w-14'></span> */}
            <h3 className="text-2xl text-center">Design de interfaces</h3>
            <p className="text-sm text-gray-400 text-center">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
        <div className="bg-neutral-950 px-6 py-8 rounded">
          <div className="flex flex-col gap-5 items-center">
            <StackSimple size={36} />
            {/* <span className='border border-blue-500 w-14'></span> */}
            <h3 className="text-2xl text-center ">Desenvolvimento</h3>
            <p className="text-sm text-gray-400 text-center">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
        <div className="bg-neutral-950 px-6 py-8 rounded">
          <div className="flex flex-col gap-5 items-center">
            <StackSimple size={36} />
            {/* <span className='border border-blue-500 w-14'></span> */}
            <h3 className="text-2xl text-center">UI/UX Design</h3>
            <p className="text-sm text-gray-400 text-center">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
