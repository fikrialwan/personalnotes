import React from "react";

function Button({ children, isSubmit = false, onclick = () => { }, backgroundColor }) {
    if (isSubmit) {
        return <button type="submit" style={{ backgroundColor }}>
            {children}
        </button>
    } else {
        return <button onClick={onclick} style={{ backgroundColor }}>
            {children}
        </button>
    }
}

export default Button;