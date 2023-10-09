import { Envelope } from 'phosphor-react'

export default function Proposed() {
  return (
    <div className="grid place-items-center py-20 sm:flex sm:flex-col sm:px-6">
      <div className="flex flex-col items-center gap-5 pb-8">
        <Envelope size={58} />
        <h1 className="text-5xl sm:text-3xl">Solicite sua proposta</h1>
      </div>
      <div className="w-5/12 rounded-lg bg-blue-950 p-10 sm:w-full">
        <form action="" className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-gray-400">
              Nome *
            </label>
            <input
              type="text"
              placeholder="Qual seu nome?"
              className="border-b border-b-gray-700 bg-transparent p-3 outline-none transition placeholder:text-sm placeholder:text-gray-400 focus:border-b-blue-500"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-gray-400">
              Email *
            </label>
            <input
              type="email"
              placeholder="Insira o seu email para contato"
              className="border-b border-b-gray-700 bg-transparent p-3 outline-none transition placeholder:text-sm placeholder:text-gray-400 focus:border-b-blue-500"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-gray-400">
              Explique sua ideia
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Escreva os detalhes do projeto"
              className="rounded-lg border border-gray-700 bg-transparent p-3 outline-none transition placeholder:text-sm placeholder:text-gray-400 focus:border-blue-500"
            ></textarea>
          </div>
          <button className="gap-2 rounded-lg bg-blue-500 px-6 py-4 text-center text-white transition hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
