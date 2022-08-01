import React from 'react';

function Header(){
    return(
        <nav className='nav'>
            <div className='nav--logo'>
                <img src='images/troll-face.png' className='nav--logo__icon' alt='logo'/>
                <h1 className='nav--logo__title'>Meme Generator</h1>
            </div>
           
            <h3 className='nav-course'>React Course - Project 3</h3>
        </nav>
    );
}

export default Header;