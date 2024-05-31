import React from 'react';
import Card from './Card';
import './Main.scss';

const cardInfo = [
    {
        id: 1,
        title: 'VANS VAULT BY OG SK8-MID LX',
        price: 170,
        imageUrl: '/public/Shoes/Vans 2.webp'
    },
    {
        id: 2,
        title: 'NIKE AIR FORCE 1 LOW 07',
        price: 125,
        imageUrl: '/public/Shoes/Nike.webp'
    },
    {
        id: 3,
        title: 'КРОСІВКИ VANS SPEED BEIGE',
        price: 135,
        imageUrl: '/public/Shoes/Vans.webp'
    },
    {
        id: 4,
        title: 'CONVERSE X CONVERSE WEAPON MID',
        price: 200,
        imageUrl: '/public/Shoes/Vans 2.webp'
    },
    {
        id: 5,
        title: 'NIKE AIR MONARCH IV',
        price: 70,
        imageUrl: '/public/Shoes/Vans 2.webp'
    },
   
]

export default function Main() {
    return (
        <main>
            {cardInfo.map((obj) => (
                <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
            ))}
        </main>
    )
}
