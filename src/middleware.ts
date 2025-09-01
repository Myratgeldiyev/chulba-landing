import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
	const { nextUrl, cookies } = request
	const { pathname } = nextUrl

	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/static') ||
		PUBLIC_FILE.test(pathname)
	) {
		return NextResponse.next()
	}

	if (
		pathname.startsWith('/en') ||
		pathname.startsWith('/tk') ||
		pathname.startsWith('/ru')
	) {
		return NextResponse.next()
	}

	const preferredLanguage = cookies.get('preferred-language')?.value

	const language = preferredLanguage || 'en'

	return NextResponse.redirect(new URL(`/${language}${pathname}`, request.url))
}

export const config = {
	matcher: [
		/*
		 * Tüm requestleri match et, ancak aşağıdaki path'leri hariç tut:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
	],
}
