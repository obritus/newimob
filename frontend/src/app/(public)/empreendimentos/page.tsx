import api from '@/libs/axios'
import { IPost } from '@/libs/types'
import Card from '@/components/Card'

export default async function Empreendimentos(query: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const { teste } = await query.searchParams
	const response = await api({
		url: `/posts`,
		method: 'GET',
		params: { limit: 6 },
	})
	const data = response.data as [IPost]

	return (
		<div className='grid grid-cols-4 gap-4 w-full'>
			<aside className='bg-gray-700'>
				<h1 className='text-center font-bold'>Filtrar pesquisa:</h1>
			</aside>
			<div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between'>
				{data.map((post: IPost) => (
					<Card
						item={post}
						key={post._id}
					/>
				))}
			</div>
		</div>
	)
}
