import { cookies } from 'next/headers'

export async function POST(request: Request) {
	const cookieStore = await cookies()
	cookieStore.set('token', request.headers.get('token') || '')
	cookieStore.set('user_id', request.headers.get('user_id') || '')

	return Response.json({
		message: 'Login efetuado com sucesso.',
		success: true,
	})
}

export async function DELETE() {
	const cookieStore = await cookies()
	cookieStore.delete('token')
	cookieStore.delete('user_id')

	return Response.json({
		message: 'Logout efetuado com sucesso.',
		success: true,
	})
}
