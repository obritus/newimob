import mongoose from 'mongoose'

const bairrosSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		cidade: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'cidades',
		},
	},
	{ timestamps: false, versionKey: false },
)

export default mongoose.models.Bairro ||
	mongoose.model('bairros', bairrosSchema)
