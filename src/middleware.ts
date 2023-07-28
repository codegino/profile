import {NextResponse} from 'next/server';
import {fallbackLng, languages} from './app/i18n/settings';
import {NextRequest} from 'next/server';

export const config = {
  // matcher: '/:lng*',
  matcher:
    '/((?!api|_next/static|.well-known|_next/image|sitemap.xml|.well-known|robots.txt|manifest.json|rss.xml|assets|favicon.ico|sw.js).*)',
};

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    // e.g. incoming request is /en/resume
    // The new URL is now /resume
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? '/' : '',
        ),
        request.url,
      ),
    );
  }

  const pathnameIsMissingLocale = languages.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /resume
    // Tell Next.js it should pretend it's /en/resume
    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, request.url),
    );
  }
}
