import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				port: '',
				pathname: '*/**',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'cdn.photoswipe.com',
				port: '',
				pathname: '*/**',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '*/**',
				search: '',
			},
		],
	},
}

export default nextConfig
