import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema(
	{
		url: { type: String, required: true },
		post: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'posts',
			required: true,
		},
	},
	{ timestamps: true, versionKey: false },
)

export default mongoose.models.Image || mongoose.model('images', imageSchema)
