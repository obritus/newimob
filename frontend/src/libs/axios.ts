import axios from 'axios'

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

api.interceptors.response.use(undefined, async error => {
	if (error.response?.status === 401) {
		// await refreshToken()
		return api(error.config)
	}

	throw error
})

export default api
