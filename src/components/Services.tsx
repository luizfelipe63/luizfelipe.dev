import { Code, Database, StackSimple } from 'phosphor-react'

export function Services() {
  return (
    <section className="mx-auto max-w-[1216px] pb-36 pt-20">
      <div className="space-y-4 text-center">
        <span className="tracking-[3px] text-gray-400">SERVIÇOS</span>
        <h2 className="text-center text-5xl">Meus serviços prestados</h2>
      </div>
      <div className="flex gap-8 pt-20">
        <div className="border border-blue-500 px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <StackSimple size={32} />
            <h3 className="max-w-[242px] text-2xl">Design de interfaces web</h3>
            <p className="text-sm text-gray-400">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
        <div className="border border-blue-500 px-4 py-8 ">
          <div className="flex flex-col items-center gap-3 text-center">
            <Code size={32} />
            <h3 className="max-w-[242px] text-2xl">
              Desenvolvimento Front-End
            </h3>
            <p className="text-sm text-gray-400">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
        <div className="border border-blue-500 px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Database size={32} />
            <h3 className="max-w-[242px] text-2xl">Desenvolvimento Back-End</h3>
            <p className="text-sm text-gray-400">
              Interfaces para websites e landing pages para qualquer nicho,
              focado em seu público e forte apelo visual
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
