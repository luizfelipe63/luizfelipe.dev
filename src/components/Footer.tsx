import {
  ArrowRight,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PhoneCall,
} from 'phosphor-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

export function Footer() {
  return (
    <footer className="bg-gradient-footer">
      <div className="flex flex-col items-center gap-3 py-20 ">
        <h2 className="text-center text-5xl">Contato</h2>
        <span className="text-gray-400">Vamos criar algo juntos?</span>
      </div>
      <div className="flex justify-between pb-20 gap-12  mx-auto max-w-[1120px] ">
        <div className="rounded-lg bg-transparent w-full">
          <div className="flex flex-col	gap-5 pb-8">
            <h1 className="text-3xl sm:text-3xl">Solicite sua proposta</h1>
          </div>
          <form action="" className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-gray-400">
                Nome *
              </label>
              <Input type="text" placeholder="Qual seu nome?" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-gray-400">
                Email *
              </label>
              <Input
                type="email"
                placeholder="Insira o seu email para contato"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-gray-400">
                Explique sua ideia
              </label>
              <Textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Escreva os detalhes do projeto"
              />
            </div>
            <Button>Enviar</Button>
          </form>
        </div>
        <div className="w-full">
          <h1 className="text-3xl">Informações de contato</h1>
          <p className="pt-8 pb-8 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            repellat,?
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Envelope size={28} />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg">Email</h2>
                <a href="" className="text-gray-400">
                  luizfepereira2@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall size={28} />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg">Telefone</h2>
                <a href="" className="text-gray-400">
                  (61) 99450-2167
                </a>
              </div>
            </div>
            <h1 className="text-xl">Minhas Redes:</h1>
            <div className="flex	">
              <a href="https://github.com/luizfelipe63" className="p-4 rounded">
                <GithubLogo size={28} className="text-gray-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/luiz-feliperocha/"
                className="p-4 rounded"
              >
                <LinkedinLogo size={28} className="text-gray-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/luiz-feliperocha/"
                className="p-4 rounded"
              >
                <InstagramLogo size={28} className="text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
