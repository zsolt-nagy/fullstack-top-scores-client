import "./App.css";
import React, { useState, useEffect } from "react";
import TopScoreForm from "./components/TopScoreForm/TopScoreForm";
import TopScoreList from "./components/TopScoreList/TopScoreList";

function App() {
    const [scores, setScores] = useState([]);

    function loadData() {
        fetch("https://xxfydv-8080.csb.app/api/players/")
            .then((x) => x.json())
            .then((response) => {
                setScores(response);
            });
    }

    useEffect(loadData, []);

    function addScore(name, score) {
        fetch("https://xxfydv-8080.csb.app/api/players/new", {
            method: "POST",
            body: JSON.stringify({
                name,
                score,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        })
            .then((x) => x.json())
            .then(loadData);
    }

    function deleteScore(id) {
        fetch(`https://xxfydv-8080.csb.app/api/players/${id}/delete`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        })
            .then((x) => x.json())
            .then(loadData);
    }

    return (
        <div className="App">
            <TopScoreForm addScore={addScore} />
            <TopScoreList scores={scores} deleteScore={deleteScore} />
        </div>
    );
}

export default App;
