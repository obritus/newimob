import mongoose from '@/libs/mongoose'
import { NextResponse } from 'next/server'
import Cidade from '@/models/Cidade'

export async function GET() {
	await mongoose()

	return NextResponse.json(await Cidade.find().populate('bairros'))
}
