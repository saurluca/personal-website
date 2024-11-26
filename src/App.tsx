import IndexPage from "./pages";
import {Analytics} from "@vercel/analytics/react"

function App() {
    return (
        <div>
            <IndexPage/>
            <Analytics/>
        </div>
    )
}

export default App
