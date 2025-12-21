import { model, Schema } from 'mongoose'

export default model(
	'settings',
	new Schema(
		{
			default_banner: {
				type: Schema.Types.ObjectId,
				ref: 'posts',
			},
			destaques: [
				{
					type: Schema.Types.ObjectId,
					ref: 'posts',
				},
			],
		},
		{ timestamps: true, versionKey: false },
	),
)
