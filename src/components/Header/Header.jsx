import React from 'react';
import './Header.scss';
import Cart from './Cart';
import Favorite from './Favorite';
import Profile from './Profile';

export default function Header() {
    return (
        <header>
            <a href="#">
                <img width={80} src="/Footshop-Logo.png" alt="Logo" />
            </a>
            <nav>
                <ul>
                    <li>
                        <Cart />
                        <Favorite />
                        <Profile />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
