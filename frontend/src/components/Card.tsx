'use client'
import { Suspense } from 'react'
import Image from 'next/image'
import { IPost } from '@/libs/types'
import { formatCurrency } from '@/libs/functions'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'

interface IProps {
	item: IPost
}

const Galeria: React.FC<IProps> = ({ item }) => {
	return (
		<Suspense fallback={<p>Carregando...</p>}>
			<div className='bg-gray-600'>
				<Carousel
					additionalTransfrom={0}
					arrows
					autoPlaySpeed={3000}
					centerMode={false}
					className='h-64'
					containerClass='container'
					dotListClass=''
					draggable
					focusOnSelect={false}
					infinite
					itemClass=''
					keyBoardControl
					minimumTouchDrag={80}
					pauseOnHover
					renderArrowsWhenDisabled={false}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					responsive={{
						desktop: {
							breakpoint: {
								max: 3000,
								min: 1024,
							},
							items: 1,
						},
						mobile: {
							breakpoint: {
								max: 464,
								min: 0,
							},
							items: 1,
						},
						tablet: {
							breakpoint: {
								max: 1024,
								min: 464,
							},
							items: 1,
						},
					}}
					rewind={false}
					rewindWithAnimation={false}
					rtl={false}
					shouldResetAutoplay
					showDots
					sliderClass=''
					slidesToSlide={1}
					swipeable>
					<Image
						width={520}
						height={296}
						alt=''
						src='https://storage.googleapis.com/imob/608755b9f161a33b509ed608/18346_thumb.webp'
						style={{
							display: 'block',
							height: '100%',
							margin: 'auto',
							width: '100%',
						}}
					/>
					<Image
						width={520}
						height={296}
						alt=''
						src='https://storage.googleapis.com/imob/608755b9f161a33b509ed608/18346_thumb.webp'
						style={{
							display: 'block',
							height: '100%',
							margin: 'auto',
							width: '100%',
						}}
					/>
					<Image
						width={520}
						height={296}
						alt=''
						src='https://storage.googleapis.com/imob/608755b9f161a33b509ed608/18346_thumb.webp'
						style={{
							display: 'block',
							height: '100%',
							margin: 'auto',
							width: '100%',
						}}
					/>
					<Image
						width={520}
						height={296}
						alt=''
						src='https://storage.googleapis.com/imob/608755b9f161a33b509ed608/18346_thumb.webp'
						style={{
							display: 'block',
							height: '100%',
							margin: 'auto',
							width: '100%',
						}}
					/>
					<Image
						width={520}
						height={296}
						alt=''
						src='https://storage.googleapis.com/imob/608755b9f161a33b509ed608/18346_thumb.webp'
						style={{
							display: 'block',
							height: '100%',
							margin: 'auto',
							width: '100%',
						}}
					/>
				</Carousel>
				<Link
					href={`/empreendimentos/${item._id}`}
					className='block p-4 hover:bg-gray-700'>
					<h2 className='text-xl font-bold text-white'>
						{item.title}
					</h2>
					<p className='mt-2 text-lg text-green-400'>
						{formatCurrency(item.price)}
					</p>
					<div></div>
				</Link>
			</div>
		</Suspense>
	)
}

export default Galeria
