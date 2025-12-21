export const formatCurrency = (value: number) => {
	return value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})
}

export const tipo: Record<number, string> = {
	1: 'Venda',
	2: 'Aluguel',
	3: 'Temporada',
}

export const categoria: Record<number, string> = {
	1: 'Casa',
	2: 'Apartamento',
	3: 'Terreno',
	4: 'Lote',
	5: 'Kitnet',
	6: 'Fazenda',
	7: 'Sítio',
	8: 'Chácara',
	9: 'Ponto Comercial',
}
