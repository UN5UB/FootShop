import React from 'react';
import DrawerButton from './DrawerButton.jsx';
import './TotalDrawer.scss';

export default function TotalDrawer() {
    return (
        <div className='cart-total'>
            <ul>
                <li>
                    <span>Total</span>
                    <div className='line'></div>
                    <b>$ 100</b>
                </li>
            </ul>
            <DrawerButton />
        </div>
    )
}
