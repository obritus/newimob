import api from '@/libs/axios'
import { IPost } from '@/libs/types'
import Card from '@/components/Card'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

export default async function Home(query: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const { teste } = await query.searchParams
	const response = await api({
		url: `/posts`,
		method: 'GET',
		params: { limit: 12 },
	})
	const data = response.data as [IPost]

	const destaques = await api({
		url: `/posts`,
		method: 'GET',
		params: { limit: 3 },
	})
	const dataDestaques = destaques.data as [IPost]

	const oportunidades = await api({
		url: `/posts`,
		method: 'GET',
		params: { limit: 4 },
	})
	const oportunidadesData = oportunidades.data as [IPost]

	return (
		<Suspense fallback={<Loading />}>
			<div className='flex flex-col gap-4  bg-amber-600'>
				<h1 className='text-center font-bol text-xl'>
					Empreendimentos em destaque
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between'>
					{dataDestaques.map(post => (
						<Card
							item={post}
							key={post._id}
						/>
					))}
				</div>
				<h1 className='text-center font-bol text-xl'>Oportunidades</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between'>
					{oportunidadesData.map(post => (
						<Card
							item={post}
							key={post._id}
						/>
					))}
				</div>
				<h1 className='text-center font-bol text-xl'>
					Últimos adicionados
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 justify-between'>
					{data.map(post => (
						<Card
							item={post}
							key={post._id}
						/>
					))}
				</div>
			</div>
		</Suspense>
	)
}
