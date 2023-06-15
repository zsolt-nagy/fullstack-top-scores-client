import React, { useState } from 'react';

export default function TopScoreForm({ addScore }) {
    let [name, setName] = useState('');
    let [score, setScore] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleScoreChange(event) {
        setScore(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addScore(name, score);
        setName('');
        setScore('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" required value={name} onChange={handleNameChange} /> 
            </label>
            <label>
                Score:
                <input type="number" min="0" required value={score} onChange={handleScoreChange} />
            </label>
            <button type="submit">Send</button>
        </form>
    );
}