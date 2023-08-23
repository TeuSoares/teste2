import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (
    (request.nextUrl.pathname == '/' && !request.cookies.has('user_type')) ||
    (request.nextUrl.pathname == '/admin' && !request.cookies.has('user_type'))
  ) {
    request.cookies.delete('user_type');
    // Request async route logout
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  const cookie = request.cookies.get('user_type');

  if (
    request.nextUrl.pathname == '/' &&
    cookie?.value != 'c' &&
    cookie?.value == 'a'
  ) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  if (
    request.nextUrl.pathname == '/admin' &&
    cookie?.value != 'a' &&
    cookie?.value == 'c'
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (
    (request.nextUrl.pathname == '/' && cookie?.value != 'c') ||
    (request.nextUrl.pathname == '/admin' && cookie?.value != 'a')
  ) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}
