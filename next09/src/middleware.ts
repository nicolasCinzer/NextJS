import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  if (request.url.includes('/api/')) {
    
  }
  
  console.log('Middleware')
  console.log(request.url)
  console.log(request.method)

  const origin = request.headers.get('origin')
  console.log(origin)

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}
