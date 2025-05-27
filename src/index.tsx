import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import NavigationHeader from "./Navigation.tsx";
import "./styles.css";
import Account from "./Account";

export default function SocialNetwork() {
    return (
        <div id={"sn-social-network"}>
            <NavigationHeader />
            <div id={"sn-main-content"} className={"sn-main-content-offset p-3"}>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"Home"} /> } />
                    <Route path={"/Home/*"} element={<Home />} />
                    <Route path={"/Account/*"} element={<Account />} />
                    <Route path={"/Search/*"} element={<Search />} />
                </Routes>
            </div>
        </div>
    );
}