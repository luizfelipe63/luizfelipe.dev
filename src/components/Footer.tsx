import { ArrowRight, GithubLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1216px] py-20">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-center text-5xl">Vamos trabalhar juntos?</h2>
        <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-4 text-white transition hover:bg-blue-600">
          Vamos lá
          <ArrowRight size={24} />
        </button>
        <div className="flex gap-4">
          <a href="https://github.com/luizfelipe63">
            <GithubLogo size={24} className=" transition hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/luiz-feliperocha/">
            <LinkedinLogo
              size={24}
              className="cursor-pointer transition hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
