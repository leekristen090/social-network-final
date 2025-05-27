import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import SocialNetwork from "./index.tsx";

export default function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"SocialNetwork"} />} />
                    <Route path={"/SocialNetwork/*"} element={<SocialNetwork />} />
                </Routes>
            </div>
        </HashRouter>
    );
}