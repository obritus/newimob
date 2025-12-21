'use client'

import { Field, useFormik } from 'formik'
import React from 'react'

const Form = () => {
	const formik = useFormik({
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
			{formik.isSubmitting && (
				<p className='text-center mb-4'>Enviando pro servidor...</p>
			)}
			<form
				onSubmit={formik.handleSubmit}
				className='flex gap-4 flex-col justify-center items-center'>
				<input
					title='login'
					name='login'
					className='px-2 py-1 text-slate-900 font-bold text-xl'
					onChange={formik.handleChange}
				/>
				<input
					title='password'
					name='password'
					type='password'
					className='px-2 py-1 text-slate-900 font-bold text-xl'
					onChange={formik.handleChange}
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
