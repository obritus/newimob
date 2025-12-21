import { NextRequest, NextResponse } from 'next/server'
import mongoose from '@/libs/mongoose'
import Cidade from '@/models/Cidade'

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params
	await mongoose()

	return NextResponse.json(
		await Cidade.find({ _id: slug }).populate('bairros'),
	)
}
