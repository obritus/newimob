import mongoose from 'mongoose'

const CidadeSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
	},
	{
		timestamps: false,
		versionKey: false,
		strictPopulate: false,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
)

CidadeSchema.virtual('bairros', {
	ref: 'bairros',
	localField: '_id',
	foreignField: 'cidade',
})

export default mongoose.models.Cidade || mongoose.model('cidades', CidadeSchema)
