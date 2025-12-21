import mongoose from '@/libs/mongoose'
import { NextRequest, NextResponse } from 'next/server'
import Post from '@/models/Post'

export const revalidate = false

export async function GET(req: NextRequest) {
	const token = req.cookies.get('token')
	const { searchParams } = req.nextUrl

	setTimeout(() => {
		console.log('foo bar')
	}, 4000)

	await mongoose()

	const query = Post.find().sort({ createdAt: -1 })

	if (searchParams.has('limit')) {
		query.limit(parseInt(searchParams.get('limit') as string))
	}

	return NextResponse.json(await query.exec())
}
