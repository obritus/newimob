'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useFormik } from 'formik'
import logotipo from '@/images/logotipo.svg'

const Form = () => {
	const {isSubmitting, handleSubmit, handleChange} = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		onSubmit(values, formikHelpers) {
			console.log(values)
			formikHelpers.setSubmitting(true)
		},
	})

	return (
		<div>
			<Link
					href={'/'}
					title='Home'
					className='inline-block flex justify-center items-center'>
					<Image
						src={logotipo}
						alt='Logotipo ImobJS'
						width={128/2}
						height={62/2}
					/>
				</Link>
			{isSubmitting && (
				<p className='text-center mb-4'>Enviando pro servidor...</p>
			)}
			<form
				onSubmit={handleSubmit}
				className='flex gap-4 flex-col justify-center items-center'>
				<input
					autoFocus
					required
					title='login'
					name='login'
					className='px-2 py-1 text-white bg-slate-700 rounded-sm font-bold text-xl'
					onChange={handleChange}
					placeholder='Usuário'
				/>
				<input
					required
					title='password'
					name='password'
					type='password'
					className='px-2 py-1 text-white bg-slate-700 rounded-sm font-bold text-xl'
					onChange={handleChange}
					placeholder='Senha'
				/>
				<button
					type='submit'
					className='rounded-full bg-slate-100 text-slate-950 px-4 py-2'>
					Entrar
				</button>
			</form>
		</div>
	)
}

export default Form
