import {NextResponse} from 'next/server';
import {fallbackLng, languages} from './app/i18n/settings';
import {NextRequest} from 'next/server';

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

const staticFiles = [
  'sitemap.xml',
  'robots.txt',
  'favicon.ico',
  'manifest.json',
  'rss.xml',
];

export function middleware(req: NextRequest) {
  let lng;

  // Get the first part of the path
  const firstPath = req.nextUrl.pathname.split('/')[1];

  if (staticFiles.includes(firstPath)) {
    return NextResponse.next();
  }

  if (!languages.includes(firstPath)) {
    lng = fallbackLng;
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  return NextResponse.next();
}
