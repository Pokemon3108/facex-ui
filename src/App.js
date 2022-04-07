import { Home } from "pages/home/Home";
import { Login } from "pages/login/Login";
import { Main } from "pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
}