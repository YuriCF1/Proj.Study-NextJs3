// 'use server'

// import { cookies, headers } from "next/headers"
import { useCookies } from 'next-client-cookies';

export default async function Cookies() {
    // const userCokies = cookies()
    const cookies = useCookies();
    
    // const userHeaders = headers()

    return (
        <div>
            <h1>Cookies e Headers</h1>
            {JSON.stringify(cookies.get('Auth'), null, 2)}
            {/* {JSON.stringify(userHeaders.entries(), null, 2)} */}
        </div>
    )
}
