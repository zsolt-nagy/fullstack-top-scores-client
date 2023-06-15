import React from 'react';

export default function TopScoreItem({ score, deleteScore }) {
    function handleClick() {
        deleteScore(score.id);
    }

    return (
        <tr>
            <td>{ score.name }</td>
            <td>{ score.score }</td>
            <td>{ new Date(score.date * 1000).toLocaleDateString("en-US") }</td>
            <td><button onClick={handleClick}>Delete</button></td>
        </tr>
    );
}