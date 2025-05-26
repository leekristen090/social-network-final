import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./home";

export default function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"Home"} />} />
                    <Route path={"/Home/*"} element={<Home />} />
                </Routes>
            </div>
        </HashRouter>
    );
}