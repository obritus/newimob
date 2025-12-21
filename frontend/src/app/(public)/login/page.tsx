import Image from 'next/image'
import Form from './Form'

export default function login(params: any) {
	return (
		<div>
			<h1 className='font-bold text-3xl text-center mb-6'>Fazer login</h1>
			<Form />
		</div>
	)
}
