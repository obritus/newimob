'use client'
import { Suspense, useEffect } from 'react'
import Image from 'next/image'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const lightbox = new PhotoSwipeLightbox({
	gallery: '#galeria',
	children: 'a',
	pswpModule: () => import('photoswipe'),
})

interface Item {
	alt: string
	thumb: string
	src: string
	w: number
	h: number
}

interface IProps {
	items?: [Item]
}

const Galeria: React.FC<IProps> = () => {
	useEffect(() => {
		lightbox.init()
		return () => {
			lightbox.destroy()
		}
	}, [])

	return (
		<Suspense fallback={<p>Carregando...</p>}>
			<div
				className='bg-gray-600 p-6 flex gap-4'
				id='galeria'>
				<a
					href='https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg'
					data-pswp-width='1875'
					data-pswp-height='2500'
					target='_blank'>
					<Image
						src='https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg'
						alt=''
						width={96}
						height={86}
					/>
				</a>
				<a
					href='https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg'
					data-pswp-width='1669'
					data-pswp-height='2500'
					target='_blank'>
					<Image
						src='https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg'
						alt=''
						width={96}
						height={86}
					/>
				</a>
				<a
					href='https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg'
					data-pswp-width='2500'
					data-pswp-height='1666'
					target='_blank'>
					<Image
						src='https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg'
						alt=''
						width={96}
						height={86}
					/>
				</a>
			</div>
		</Suspense>
	)
}

export default Galeria
