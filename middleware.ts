import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if accessing admin routes (except login page)
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const session = request.cookies.get('user_session');

        if (!session) {
            // No session, redirect to login
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            const sessionData = JSON.parse(session.value);

            // Check if user has ADMIN or MODERATOR role
            if (sessionData.role !== 'ADMIN' && sessionData.role !== 'MODERATOR') {
                return NextResponse.redirect(new URL('/admin/login', request.url));
            }
        } catch (error) {
            // Invalid session, redirect to login
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
