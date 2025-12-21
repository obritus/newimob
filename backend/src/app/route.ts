import mongoose from '@/libs/mongoose'
import { NextResponse } from 'next/server'
import User from '@/models/Usuario'
import Cidade from '@/models/Cidade'
import Bairro from '@/models/Bairro'
import Post from '@/models/Post'

export async function GET() {
	await mongoose()
	const metadata = {
		users: await User.countDocuments(),
		cidades: await Cidade.countDocuments(),
		bairros: await Bairro.countDocuments(),
		posts: await Post.countDocuments(),
	}

	return NextResponse.json(metadata)
}
