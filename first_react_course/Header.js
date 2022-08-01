import React from 'react';
function Header(){
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.svg" className="nav-logo"/>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;