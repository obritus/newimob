import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		login: { type: String, required: true },
		senha: { type: String, required: true, select: false },
		status: { type: Boolean, required: true },
		admin: { type: Boolean, default: true },
	},
	{ timestamps: true, versionKey: false, collection: 'usuarios' },
)

export default mongoose.models.User || mongoose.model('usuarios', UserSchema)
