import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const themePreference = request.cookies.get('theme')
    if (!themePreference) {
        response.cookies.set('theme', 'light')
    }
    return response;
    // if (request.nextUrl.pathname === '/profile') {
    //     return NextResponse.redirect(new URL('/blog', request.url))
    // }
    // return NextResponse.redirect(new URL('/', request.url))
}

// export const config = {
//     matcher: '/profile',
// }