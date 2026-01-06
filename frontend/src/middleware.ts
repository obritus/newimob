import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicPaths = [
	{ path: '/login', whenAuthenticated: 'redirect' },
	{ path: '/painel', whenAuthenticated: 'next' },
	{ path: '/', whenAuthenticated: 'next' }
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const token = request.cookies.get('token')

	const publicRoute = publicPaths.find(route => route.path === pathname)

	if (!token && publicRoute) {
		return NextResponse.next()
	}

	if (!token && !publicRoute) {
		const redirectURL = request.nextUrl.clone()
		redirectURL.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

		return NextResponse.redirect(redirectURL)
	}

	if (token && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
		const redirectURL = request.nextUrl.clone()
		redirectURL.pathname = '/'

		return NextResponse.redirect(redirectURL)
	}

	if (token && !publicRoute) {
		return NextResponse.next()
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
}
