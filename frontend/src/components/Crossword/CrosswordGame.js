import React from 'react';
import CrosswordGrid from './CrosswordGrid';
import CrosswordClues from './CrosswordClues';
import { useNavigate } from 'react-router-dom';

const CrosswordGame = () => {

    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/');
    }

    return (
        <div className="min-h-screen bg-yellow-100 flex flex-col items-center">
            <h2 className="text-xl text-red-400 font-bold mt-6 mb-8">Em Desenvolvimento!</h2>
            <h1 className="text-4xl font-bold mt-6 mb-8">Jogo da Palavra Cruzada</h1>
            <div className="flex">
                <CrosswordGrid />
                <CrosswordClues />
            </div>
            <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                onClick={() => handleExit()} 
            >
                Sair
            </button>
        </div>
    );
};

export default CrosswordGame;
