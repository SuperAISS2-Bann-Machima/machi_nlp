import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'

// Pages
import Core from '../features/core'
import Apis from '../features/apis'
import NotFound from '../features/notfound'
import Products from '../features/products'
// import Tutorial from '../features/tutorial'
// import Pat from '../features/pat'
export default function Index() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* <Route exact path='/tutorial' element={<Tutorial />} /> */}
                <Route exact path='/api' element={<Apis />} />
                <Route exact path='/products' element={<Products />} />
                {/* <Route exact path='/products' element={<Pat />} /> */}
                <Route exact path='/' element={<Core />} />
                {/* NOT FOUND URL WILL REDIRECT TO THIS PAGE */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}


