import { Route, Routes, BrowserRouter, RouterProvider, Router } from 'react-router-dom'
import { Logon } from '../security/logon'
import { App } from '../App'

export default function RedirectRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Logon/>}/>
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}