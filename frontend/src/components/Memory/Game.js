import React, { useState } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';

const initialCards = [
    "🍎", "🍇", "🥝", "🍉", "🍑", "🍋", 
    "🍎", "🍇", "🥝", "🍉", "🍑", "🍋"
];

const Game = () => {
    const [score, setScore] = useState(0); // Estado da pontuação

    // Lógica para atualizar a pontuação
    const updateScore = (score) => {
        setScore((prev) => Math.max(0, (prev + score))); // Garante que o placar não fique negativo
    };

    return (
        <div className="min-h-screen flex flex-col items-center relative w-full p-4">
            <h1 className="text-3xl font-bold text-gray-800 my-4">Jogo da Memória</h1>
            <div className="flex flex-col lg:flex-row justify-center w-full">
                <div className="flex justify-center items-start mb-4 lg:mb-0 lg:mr-4">
                    <Scoreboard score={score} />
                </div>
                <div className="flex justify-center items-center w-full">
                    <Board initialCards={initialCards} updateScore={updateScore} />
                </div>
            </div>
        </div>
    );
};

export default Game;