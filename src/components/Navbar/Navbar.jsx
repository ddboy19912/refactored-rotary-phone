import React from "react";
import './Navbar.css'
import cart from '../../image/shopping-cart-thin.svg'
import caretDown from '../../image/caret-down-filled.svg'


class NavBar extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar">
<div className='left'>
    <h2 className='left-items'>WOMEN</h2>
    <h2 className='left-items'>MEN</h2>
    <h2 className='left-items'>KIDS</h2>
</div>
<div className='middle'>
   <img src="https://i.ibb.co/bQ6gDMG/shopping-bag.png" alt="" style={{width: '32px'}}/>
</div>
<div className='right'>
    <div style={{fontSize: '24px', fontWeight: '500', width: '100%', cursor: 'pointer'}}>$
    <img className='caret' src={caretDown} alt="" />
    </div>
    <span style={{cursor: 'pointer'}}> <img src={cart} alt="" /> </span>
</div>
            </nav>
        );
    }
}
 
export default NavBar ;