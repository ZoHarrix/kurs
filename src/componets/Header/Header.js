import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import NavLink from "./NavLink";

function Header(){
    return (
        <div>
            <Logo />
            <Menu>
                <NavLink to="/" label="Link1" />
                <NavLink to="/" label="Link2" />
                <NavLink to="/" label="Link3" />
                <NavLink to="/" label="Link4" />
            </Menu>
        </div>
    );

}

export default Header;