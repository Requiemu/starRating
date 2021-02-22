import React from 'react';
import Color from './Color';

export default function ColorList({colors = [], onDeleteColor = f => f, onRate = f => f}) {
    if (!colors.length) return <div>No Colors Listed.</div>
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} onDeleteColor={onDeleteColor} onRate={onRate}/>)
            }
        </div>
    )
}