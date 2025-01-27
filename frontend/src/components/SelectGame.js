import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectGame = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-gray-800">
            <h1 className="text-4xl font-bold mb-8">Selecione um Jogo</h1>
            <div className="flex space-x-8">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300"
                    onClick={() => navigate('/memory-game')}
                >
                    Jogo da Memória
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300"
                    onClick={() => navigate('/crossword')}
                >
                    Palavra Cruzada
                </button>
            </div>
        </div>
    );
};

export default SelectGame;
