import { cookies, headers } from "next/headers"
export default async function Cookies() {
    const userCokies = cookies()
    const userHeaders = headers()

    return (
        <div>
            <h1>Cookies e Headers</h1>
            {JSON.stringify(userCokies.get('Auth'), null, 2)}
            {JSON.stringify(userHeaders.entries(), null, 2)}
        </div>
    )
}
