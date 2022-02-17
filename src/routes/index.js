import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Pages
import Core from '../features/core'
import NotFound from '../features/notfound'

export default function Index() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Core />} />
                {/* NOT FOUND URL WILL REDIRECT TO THIS PAGE */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}


