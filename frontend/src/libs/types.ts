export interface IPost {
	_id: string
	title: string
	price: number
	type: number
	categoria: number
	quartos: number
	suites: number
	banheiros: number
	vagas_garagem: number
	details: string
	active: boolean
	cidade: { _id: string; name: string }
	bairro: { _id: string; name: string }
	google_maps: {
		formatted_address: string
		full_address: string
		lat: number
		lng: number
	}
	tags: [string]
}
