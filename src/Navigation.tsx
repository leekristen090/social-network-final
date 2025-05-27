import {ListGroup} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSearch, FaHome } from "react-icons/fa";


export default function NavigationHeader() {
    const {pathname} = useLocation();
    const links = [
        {label: "Home", path: "/SocialNetwork/Home", icon: FaHome},
        {label: "Search", path: "/SocialNetwork/Search", icon: FaSearch},
        {label: "Account", path: "/SocialNetwork/Account", icon: FaRegCircleUser }
    ];
    return(
        <ListGroup id={"sn-navigation-header"} style={{ width: 100 }}
                   className={"rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-secondary-subtle z-2"}>
            {links.map((link) => (
                <ListGroup.Item key={link.path} as={Link} to={link.path}
                                className={`bg-secondary-subtle text-center border-0 
                                ${pathname.includes(link.label) ? "text-white bg-white" : "bg-secondary-subtle text-primary"}`}>
                    {link.icon({className: "fs-1 text-primary"})} <br />
                    {link.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}