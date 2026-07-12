import { useEffect } from "react"
import { supabase } from "./supabaseClient"

function Applications() {
    useEffect(() => { // component - render the page first, and then do the errand
        async function checkSession() { // 
            const { data } = await supabase.auth.getSession()
            console.log("Full session:", data.session)
            console.log("Token:", data.session?.access_token)
        }
        checkSession()
    }, []) // "[] is schedule, empty array means 1 time only, numbered array it will repeat if ever the information inside changes"

    return (
        <h2>HELLOOOOO</h2>

    )
}

export default Applications