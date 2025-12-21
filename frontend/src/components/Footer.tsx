'use client'
import Image from 'next/image'
import imobjs from '@/images/imobjs_logo.svg'
import { JSX } from 'react'
import { InstagramLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'

export default function Footer(): JSX.Element {
	return (
		<footer className='py-8'>
			<div className='container mx-auto grid grid-cols-3 gap-4 py-2 bg-black/15 text-xs rounded-md'>
				<div></div>
				<div className='text-center flex items-center justify-center gap-4'>
					<Image
						src={imobjs}
						alt='Logotipo ImobJS'
						width={50}
						height={27}
					/>
					<p className='text-left'>
						&copy; {new Date().getFullYear()} ImobJS.
						<br />
						Todos os direitos reservados.
					</p>
				</div>
				<div className='place-self-end pe-4 flex gap-4'>
					<InstagramLogoIcon
						size={42}
						weight='fill'
					/>
					<WhatsappLogoIcon
						size={42}
						weight='fill'
					/>
				</div>
			</div>
		</footer>
	)
}
