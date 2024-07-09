import { Code, Database, StackSimple } from 'phosphor-react'

export function Services() {
  return (
    <section id='services' className="mx-auto max-w-[1120px] pb-36 pt-20">
      <div className="text-center flex-col flex gap-3">
        <h2 className="text-center text-5xl sm:text-3xl">
          SERVIÇOS
        </h2>
        <span className="text-gray-400">
          Meus serviços prestados
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-20">
        <div className="w-full border border-blue-500 px-4 py-8">
          <div className="flex flex-col gap-3">
            <StackSimple size={32} />
            <h3 className="text-2xl">Design de interfaces web</h3>
            <p className="text-sm text-gray-400">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
        <div className="w-full border border-blue-500 px-4 py-8">
          <div className="flex flex-col gap-3 ">
            <Code size={32} />
            <h3 className="text-2xl">
              Desenvolvimento Front-End
            </h3>
            <p className="text-sm text-gray-400">
              Desenvolvo interfaces que seguem rigorosamente aos padrões de
              acessibilidade, responsividade e SEO.
            </p>
          </div>
        </div>
        <div className="w-full border border-blue-500 px-4 py-8">
          <div className="flex flex-col gap-3">
            <Database size={32} />
            <h3 className="text-2xl">Desenvolvimento Back-End</h3>
            <p className="text-sm text-gray-400">
              Construo arquiteturas escaláveis e implemento toda a lógica de
              negócios, seguindo aos princípios de Clean Code, como SOLID e DDD.
            </p>
          </div>
        </div>
        <div className="w-full border border-blue-500 px-4 py-8">
          <div className="flex flex-col gap-3 ">
            <Database size={32} />
            <h3 className="text-2xl">Desenvolvimento Back-End</h3>
            <p className="text-sm text-gray-400">
              Construo arquiteturas escaláveis e implemento toda a lógica de
              negócios, seguindo aos princípios de Clean Code, como SOLID e DDD.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
