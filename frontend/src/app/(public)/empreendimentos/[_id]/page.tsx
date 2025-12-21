import { Suspense } from 'react'
import api from '@/libs/axios'
import { IPost } from '@/libs/types'
import { formatCurrency, categoria, tipo } from '@/libs/functions'
import Galeria from '@/components/Galeria'

export default async function Empreendimento({
	params,
}: {
	params: Promise<{ _id: string }>
}) {
	const { _id } = await params
	const response = await api.get(`/posts/${_id}`)
	const post = response.data as IPost

	return (
		<Suspense fallback={<div>Carregando...</div>}>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-4'>
				<div className=''>
					<h2 className='text-5xl font-bold mb-4 text-gray-300'>
						{post.title}
					</h2>
					<p className='text-5xl mb-4 text-green-500'>
						{formatCurrency(post.price)}
					</p>
					<p className=''>{tipo[post.type]}</p>
					<p className=''>{categoria[post.categoria]}</p>
					<p className=''>Quartos: {post.quartos}</p>
					<p className=''>Suiítes: {post.suites}</p>
					<p className=''>Banehriso: {post.banheiros}</p>
					<p className=''>Vagas na garagem: {post.vagas_garagem}</p>
					<p className=''>Cidade: {post.cidade.name}</p>
					<p className=''>Bairro: {post.bairro.name}</p>
					<p className='py-4 border-t border-black'>{post.details}</p>
				</div>
				<Galeria />
			</div>
		</Suspense>
	)
}
