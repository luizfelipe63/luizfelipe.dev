import { Code, Database, StackSimple } from 'phosphor-react'

export function Services() {
  return (
    <section id='services' className="mx-auto max-w-[1216px] pb-36 pt-20 sm:px-6 sm:py-20">
      <div className="space-y-4 text-center">
        <span className="tracking-[3px] text-gray-400 sm:text-sm">
          SERVIÇOS
        </span>
        <h2 className="text-center text-5xl sm:text-3xl">
          Meus serviços prestados
        </h2>
      </div>
      <div className="flex gap-8 pt-20 sm:flex-col">
        <div className="w-full border border-blue-500 px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <StackSimple size={32} />
            <h3 className="max-w-[242px] text-2xl">Design de interfaces web</h3>
            <p className="text-sm text-gray-400">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
        <div className="w-full border border-blue-500 px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Code size={32} />
            <h3 className="max-w-[242px] text-2xl">
              Desenvolvimento Front-End
            </h3>
            <p className="text-sm text-gray-400">
              Desenvolvo interfaces que seguem rigorosamente aos padrões de
              acessibilidade, responsividade e SEO.
            </p>
          </div>
        </div>
        <div className="w-full border border-blue-500 px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Database size={32} />
            <h3 className="max-w-[242px] text-2xl">Desenvolvimento Back-End</h3>
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
