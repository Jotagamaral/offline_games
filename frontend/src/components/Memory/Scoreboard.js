import React from 'react';

const Scoreboard = ({ score }) => {
    return (
        <div className="w-48 p-4 bg-slate-500 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Placar</h2>
            <p className="text-2xl text-black font-semibold">{score} pontos</p>
            <p className="mt-2 text-sm text-black">
                +10 pontos por par correto <br />
                -5 pontos por par errado
            </p>
        </div>
    );
};

export default Scoreboard;
