import {
  ArrowRight,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
} from 'phosphor-react'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1216px] py-20">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-center text-5xl">Vamos trabalhar juntos?</h2>
        <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-4 text-white">
          Vamos lá
          <ArrowRight size={24} />
        </button>
        <div className="flex gap-4">
          <GithubLogo size={24} />
          <LinkedinLogo size={24} />
          <InstagramLogo size={24} />
        </div>
      </div>
    </footer>
  )
}
