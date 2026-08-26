import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale } from '@/lib/locales';

const crawlerPattern =
  /bot|crawler|spider|crawling|google|bing|yandex|baidu|duckduck|slurp|facebookexternalhit|linkedinbot|twitterbot|embedly|pinterest|redditbot|applebot|semrush|ahrefs/i;

function isCrawler(request: NextRequest): boolean {
  const ua = request.headers.get('user-agent') ?? '';
  return crawlerPattern.test(ua);
}

function prefersGerman(request: NextRequest): boolean {
  const header = request.headers.get('accept-language') ?? '';
  const first = header.split(',')[0]?.split(';')[0]?.trim().toLowerCase() ?? '';
  return first.startsWith('de');
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split('/').filter(Boolean)[0];

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(url);
  }

  if (first === 'de') {
    return NextResponse.next();
  }

  if (pathname === '/' && prefersGerman(request) && !isCrawler(request)) {
    const url = request.nextUrl.clone();
    url.pathname = '/de';
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.svg|.*\\..*).*)'],
};
