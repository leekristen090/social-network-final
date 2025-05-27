import {FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div id={"sn-login-screen"} className={"sn-margin-right-left"}>
            <h3>Log In</h3>
            <FormControl placeholder={"username"} id={"sn-username"} type={"text"} className={"mb-2"} />
            <FormControl placeholder={"password"} id={"sn-password"} type={"password"} className={"mb-2"} />
            <Link to={"/SocialNetwork/Home"} id={"sn-signin-btn"} className={"btn btn-primary w-100 mb-2"}>
                Sign in
            </Link>
            <Link to={"/SocialNetwork/Account/Signup"} id={"wd-signup-link"}>Don't have an account? Create new account</Link>
        </div>
    );
}