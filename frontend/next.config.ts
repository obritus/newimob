import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		domains: [
			'cdn.photoswipe.com',
			'storage.googleapis.com',
			'images.unsplash.com',
		],
	},
}

export default nextConfig
