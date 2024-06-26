import { type NextRequest } from "next/server" 
import { headers, cookies } from "next/headers"

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers()
    console.log(requestHeaders.get('authorization'))
    console.log(headerList.get('authorization'))
    const theme = request.cookies.get("theme")
    cookies().set('resultsPerPage', '20')
    console.log(theme, 'theme')
    console.log(cookies().get('resultsPerPage'))
    return new Response('<h2>Profile Api</h2>', {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}