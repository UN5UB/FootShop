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
        title: 'КРОСІВКИ VANS SPEED BEIGE',
        price: 135,
        imageUrl: '/public/Shoes/Vans.webp'
    },
    {
        id: 3,
        title: 'CONVERSE X CONVERSE WEAPON MID',
        price: 200,
        imageUrl: '/public/Shoes/Converse.webp'
    },
    {
        id: 4,
        title: 'NIKE AIR MONARCH IV',
        price: 70,
        imageUrl: '/public/Shoes/Nike.webp'
    },
]

export default function Main() {
    return (
        <main>
            {cardInfo.map((obj) => (
                <Card key={obj.id} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
            ))}
        </main>
    )
}
