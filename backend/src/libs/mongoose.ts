import mongoose from 'mongoose'

const {
	NEXT_PUBLIC_MONGODB_URI,
	NEXT_PUBLIC_MONGODB_USER,
	NEXT_PUBLIC_MONGODB_PASS,
} = process.env

const connect = async () => {
	mongoose
		.connect(NEXT_PUBLIC_MONGODB_URI || '', {
			user: NEXT_PUBLIC_MONGODB_USER,
			pass: NEXT_PUBLIC_MONGODB_PASS,
			dbName: 'imob',
		})
		.then(() => {})
		.catch(error => {
			console.error('Erro ao conectar ao MongoDB:', error)
		})
}

export default connect
