import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../Login";
import Profile from "./Profile.tsx";
import Signup from "./Signup.tsx";

export default function Account() {
    return (
        <div id={"sn-account"}>
            <table>
                <tr>
                    <td valign={"top"}>
                        <Routes>
                            <Route path={"/"} element={<Navigate to={"/SocialNetwork/Account/Signin"}/>}/>
                            <Route path={"/Signin"} element={<Login />} />
                            <Route path={"/Profile"} element={<Profile />} />
                            <Route path={"/Signup"} element={<Signup />} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}