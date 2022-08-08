import React from "react";

class NavBar extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="flex justify-between bg-slate-600 h-20 items-center px-10">
<div className="flex gap-3">
    <h2>WOMEN</h2>
    <h2>MEN</h2>
    <h2>KIDS</h2>
</div>
<div>
    LOGO
</div>
<div>
    $
</div>
            </nav>
        );
    }
}
 
export default NavBar ;