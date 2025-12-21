'use client'

export default function Error() {
	return (
		<div className='flex flex-col items-center justify-center h-full'>
			<h1 className='text-3xl font-bold mb-4'>Ocorreu um erro!</h1>
			<p className='text-lg'>Por favor, tente novamente mais tarde.</p>
		</div>
	)
}
