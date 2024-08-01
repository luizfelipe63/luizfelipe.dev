import { ArrowRight, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, PhoneCall } from 'phosphor-react'

export function Footer() {
	return (
		<footer className=' mx-auto max-w-[1120px]'>
			<div className="flex flex-col items-center gap-3 py-20">
				<h2 className="text-center text-5xl">
					Contato
				</h2>
				<span className="text-gray-400">
					Vamos criar algo juntos?
				</span>
			</div>
		 <div className="flex justify-between pb-20 gap-12">
			<div className="rounded-lg bg-transparent w-full">
			<div className="flex flex-col	gap-5 pb-8">
				<h1 className="text-3xl sm:text-3xl">Solicite sua proposta</h1>
			</div>
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
				<div className='w-full'>
					<h1 className='text-3xl'>Informações de contato</h1>
					<p className='pt-8 pb-8 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat,?</p>
					<div className='flex flex-col gap-5'>		
						<div className='flex items-center gap-3'>
							<Envelope size={28}/>
							<div className='flex flex-col gap-2'>
								<h2 className='text-lg'>Email</h2>
								<a href="" className='text-gray-400'>luizfepereira2@gmail.com</a>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<PhoneCall size={28}/>
							<div className='flex flex-col gap-2'>
								<h2 className='text-lg'>Telefone</h2>
								<a href="" className='text-gray-400'>(61) 99450-2167</a>
							</div>
						</div>
						<h1 className='text-xl'>Minhas Redes:</h1>
						<div className="flex gap-4">
							<a href="https://github.com/luizfelipe63" className='border p-4 border-blue-500 rounded'>
								<GithubLogo size={24} className="text-gray-400" />
							</a>
							<a href="https://www.linkedin.com/in/luiz-feliperocha/" className='border p-4  border-blue-500 rounded'>
								<LinkedinLogo
									size={24}
									className="text-gray-400"
								/>
							</a>
							<a href="https://www.linkedin.com/in/luiz-feliperocha/" className='border p-4  border-blue-500 rounded'>
								<InstagramLogo
									size={24}
									className="text-gray-400"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
