import React from 'react';
import TopScoreItem from './TopScoreItem';

export default function TopScoreList({ scores, deleteScore }) {
    let ScoreItemsJSX = scores.map(score => <TopScoreItem score={score} key={score.id} deleteScore={deleteScore} />)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Time</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {ScoreItemsJSX}
            </tbody>
        </table>
    );
}