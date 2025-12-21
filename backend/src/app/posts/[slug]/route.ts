import { NextRequest, NextResponse } from 'next/server'
import mongoose from '@/libs/mongoose'
import Post from '@/models/Post'

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params
	await mongoose()

	return NextResponse.json(await Post.findOne({ _id: slug }))
}
