import mongoose from 'mongoose'

const postsSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		categoria: { type: Number, required: true },
		type: { type: Number, required: true },
		price: { type: Number, required: true },
		quartos: { type: Number },
		suites: { type: Number },
		banheiros: { type: Number },
		vagas_garagem: { type: Number },
		details: { type: String },
		active: { type: Boolean, required: true, default: false },
		cidade: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'cidades',
		},
		bairro: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'bairros',
		},
		google_maps: {
			formatted_address: { type: String },
			full_address: { type: String },
			lat: { type: Number },
			lng: { type: Number },
		},
		tags: [],
	},
	{
		timestamps: true,
		versionKey: false,
		collection: 'posts',
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
)

// FAZ REFERÊNCIA ÀS IMAGENS DA GALERIA QUE CONTÊM O _ID DO POST.
postsSchema.virtual('images', {
	ref: 'images',
	localField: '_id',
	foreignField: 'post',
})

export default mongoose.models.Post || mongoose.model('posts', postsSchema)
