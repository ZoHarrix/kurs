import React from "react";

import logoImg from "./picture.png";

const styles = {
    width: 120,
    height: 'auto',
};

function Logo(){
    return (
        <div>
            <img src={logoImg} alt='Logo' style={styles} />
        </div>
    );
}

export default Logo;