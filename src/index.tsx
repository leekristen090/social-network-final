import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import NavigationHeader from "./Navigation.tsx";
import "./styles.css";

export default function SocialNetwork() {
    return (
        <div id={"sn-social-network"}>
            <NavigationHeader />
            <div id={"sn-main-content"} className={"sn-main-content-offset"}>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"Home"} /> } />
                    <Route path={"/Home/*"} element={<Home />} />
                    <Route path={"/Login/*"} element={<Login />} />
                    <Route path={"/Search/*"} element={<Search />} />
                </Routes>
            </div>
        </div>
    );
}