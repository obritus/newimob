'use client'
import Image from 'next/image'
import logotipo from '@/images/logotipo.svg'
import Link from 'next/link'
import { JSX } from 'react'
import { Formik } from 'formik'

export default function Header(): JSX.Element {
	return (
		<header className='py-4'>
			<div className='container mx-auto flex gap-4 items-center'>
				<Link
					href={'/'}
					title='Home'
					className='inline-block'>
					<Image
						src={logotipo}
						alt='Logotipo ImobJS'
						width={128}
						height={62}
					/>
				</Link>
				<div className='w-full'>
					<Formik
						initialValues={{ search: '' }}
						onSubmit={values => {
							console.log(values)
						}}>
						{({ values, handleChange, handleSubmit }) => (
							<form
								onSubmit={handleSubmit}
								className=''>
								<input
									type='text'
									name='search'
									value={values.search}
									onChange={handleChange}
									placeholder='Buscar...'
									className='px-4 py-2 w-full rounded-md text-gray-900 bg-white'
								/>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</header>
	)
}
